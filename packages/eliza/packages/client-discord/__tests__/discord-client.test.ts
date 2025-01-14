import { describe, it, expect, vi, beforeEach } from 'vitest';
import { DiscordClient } from '../src';
import { Client, Events } from 'discord.js';

// Mock @elizaos/core
vi.mock('@elizaos/core', () => ({
  elizaLogger: {
    info: vi.fn(),
    error: vi.fn(),
    debug: vi.fn(),
  },
  getEmbeddingZeroVector: () => new Array(1536).fill(0),
  stringToUuid: (str: string) => str,
  messageCompletionFooter: '# INSTRUCTIONS: Choose the best response for the agent.',
  shouldRespondFooter: '# INSTRUCTIONS: Choose if the agent should respond.',
  generateMessageResponse: vi.fn(),
  generateShouldRespond: vi.fn(),
  composeContext: vi.fn(),
  composeRandomUser: vi.fn(),
}));

// Mock discord.js Client
vi.mock('discord.js', () => {
  const mockClient = {
    login: vi.fn().mockResolvedValue('token'),
    on: vi.fn(),
    once: vi.fn(),
    destroy: vi.fn().mockResolvedValue(undefined),
  };
  
  return {
    Client: vi.fn(() => mockClient),
    Events: {
      ClientReady: 'ready',
      MessageCreate: 'messageCreate',
      VoiceStateUpdate: 'voiceStateUpdate',
      MessageReactionAdd: 'messageReactionAdd',
      MessageReactionRemove: 'messageReactionRemove',
    },
    GatewayIntentBits: {
      Guilds: 1,
      DirectMessages: 2,
      GuildVoiceStates: 3,
      MessageContent: 4,
      GuildMessages: 5,
      DirectMessageTyping: 6,
      GuildMessageTyping: 7,
      GuildMessageReactions: 8,
    },
    Partials: {
      Channel: 'channel',
      Message: 'message',
      User: 'user',
      Reaction: 'reaction',
    },
    Collection: class Collection extends Map {},
  };
});

describe('DiscordClient', () => {
  let mockRuntime: any;
  let discordClient: DiscordClient;

  beforeEach(() => {
    mockRuntime = {
      getSetting: vi.fn((key: string) => {
        if (key === 'DISCORD_API_TOKEN') return 'mock-token';
        return undefined;
      }),
      getState: vi.fn(),
      setState: vi.fn(),
      getMemory: vi.fn(),
      setMemory: vi.fn(),
      getService: vi.fn(),
      registerAction: vi.fn(),
      providers: [],
      character: {
        clientConfig: {
          discord: {
            shouldIgnoreBotMessages: true
          }
        }
      }
    };

    discordClient = new DiscordClient(mockRuntime);
  });

  it('should initialize with correct configuration', () => {
    expect(discordClient.apiToken).toBe('mock-token');
    expect(discordClient.client).toBeDefined();
    expect(mockRuntime.getSetting).toHaveBeenCalledWith('DISCORD_API_TOKEN');
  });

  it('should login to Discord on initialization', () => {
    expect(discordClient.client.login).toHaveBeenCalledWith('mock-token');
  });

  it('should register event handlers on initialization', () => {
    expect(discordClient.client.once).toHaveBeenCalledWith(Events.ClientReady, expect.any(Function));
    expect(discordClient.client.on).toHaveBeenCalledWith('guildCreate', expect.any(Function));
    expect(discordClient.client.on).toHaveBeenCalledWith(Events.MessageReactionAdd, expect.any(Function));
    expect(discordClient.client.on).toHaveBeenCalledWith(Events.MessageReactionRemove, expect.any(Function));
    expect(discordClient.client.on).toHaveBeenCalledWith('voiceStateUpdate', expect.any(Function));
  });

  it('should clean up resources when stopped', async () => {
    await discordClient.stop();
    expect(discordClient.client.destroy).toHaveBeenCalled();
  });
});
