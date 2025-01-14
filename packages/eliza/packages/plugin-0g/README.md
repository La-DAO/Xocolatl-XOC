# @elizaos/plugin-0g

A plugin for storing data using the 0G protocol within the ElizaOS ecosystem.

## Description

The 0G plugin enables seamless integration with the Zero Gravity (0G) protocol for decentralized file storage. It provides functionality to upload files to the 0G network.

## Installation

```bash
pnpm install @elizaos/plugin-0g
```

## Configuration

The plugin requires the following environment variables to be set:

```typescript
ZEROG_INDEXER_RPC=<0G indexer RPC endpoint>
ZEROG_EVM_RPC=<0G EVM RPC endpoint>
ZEROG_PRIVATE_KEY=<Private key for transactions>
ZEROG_FLOW_ADDRESS=<0G Flow contract address>
```

## Usage

### Basic Integration

```typescript
import { zgPlugin } from "@eliza/plugin-0g";
```

### File Upload Example

```typescript
// The plugin automatically handles file uploads when triggered
// through natural language commands like:

"Upload my document.pdf";
"Store this image.png on 0G";
"Save my resume.docx to Zero Gravity";
```

## API Reference

### Actions

#### ZG_UPLOAD

Uploads files to the 0G network.

**Aliases:**

- UPLOAD_FILE_TO_ZG
- STORE_FILE_ON_ZG
- SAVE_FILE_TO_ZG
- UPLOAD_TO_ZERO_GRAVITY
- STORE_ON_ZERO_GRAVITY
- SHARE_FILE_ON_ZG
- PUBLISH_FILE_TO_ZG

**Input Content:**

```typescript
interface UploadContent {
    filePath: string;
}
```

## Common Issues & Troubleshooting

1. **File Access Errors**

    - Ensure the file exists at the specified path
    - Check file permissions
    - Verify the path is absolute or relative to the execution context

2. **Configuration Issues**
    - Verify all required environment variables are set
    - Ensure RPC endpoints are accessible
    - Confirm private key has sufficient permissions

## Security Best Practices

1. **Environment Variables**
    - Never commit private keys to version control
    - Use secure environment variable management
    - Rotate private keys periodically

## Development Guide

### Setting Up Development Environment

1. Clone the repository
2. Install dependencies:

```bash
pnpm install
```

3. Build the plugin:

```bash
pnpm run build
```

4. Run the plugin:

```bash
pnpm run dev
```

## Future Enhancements

1. **Storage Management**

    - Multi-file upload optimization
    - Folder structure preservation
    - Automated file replication
    - Storage redundancy management
    - File versioning system
    - Archival storage options

2. **Content Distribution**

    - CDN integration
    - Bandwidth optimization
    - Geographic replication
    - Edge caching support
    - P2P content delivery
    - Streaming optimization

3. **Data Security**

    - Enhanced encryption options
    - Access control lists
    - Key management system
    - Data integrity verification
    - Secure sharing mechanisms
    - Privacy-preserving features

4. **Integration Features**

    - Additional blockchain support
    - Cross-chain functionality
    - Smart contract integration
    - NFT storage optimization
    - DApp integration tools
    - API expansion

5. **Performance Optimization**

    - Upload speed improvements
    - Parallel processing
    - Compression algorithms
    - Caching mechanisms
    - Network optimization
    - Resource management

6. **Developer Tools**

    - Enhanced SDK features
    - CLI tool improvements
    - Testing framework
    - Monitoring dashboard
    - Analytics integration
    - Documentation generator

7. **Content Management**

    - Metadata management
    - Search functionality
    - Content indexing
    - Tag system
    - Collection management
    - Batch operations

8. **Protocol Features**
    - Model service deployment
    - KV store implementation
    - State persistence
    - Database integration
    - Enhanced file metadata
    - Protocol governance

We welcome community feedback and contributions to help prioritize these enhancements.

## Contributing

Contributions are welcome! Please see the [CONTRIBUTING.md](CONTRIBUTING.md) file for more information.

## Credits

This plugin integrates with and builds upon several key technologies:

- [Zero Gravity (0G)](https://0g.xyz/): Decentralized file storage protocol
- [IPFS](https://ipfs.tech/): InterPlanetary File System
- [Filecoin](https://filecoin.io/): Decentralized storage network
- [Flow](https://flow.com/): Blockchain for open worlds
- [Content Addressable Storage](https://en.wikipedia.org/wiki/Content-addressable_storage): Storage architecture

Special thanks to:

- The 0G Protocol development team
- The Protocol Labs team for IPFS
- The Filecoin Foundation
- The Flow blockchain team
- The decentralized storage community
- The Eliza community for their contributions and feedback

For more information about 0G capabilities:

- [0G Documentation](https://docs.0g.xyz/)
- [IPFS Documentation](https://docs.ipfs.tech/)
- [Filecoin Docs](https://docs.filecoin.io/)
- [Flow Documentation](https://developers.flow.com/)

## License

This plugin is part of the Eliza project. See the main project repository for license information.
