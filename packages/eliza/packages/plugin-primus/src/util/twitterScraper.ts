import { Scraper } from "agent-twitter-client";
import { elizaLogger } from "@elizaos/core";
import { verifyProof, generateProof } from "./primusUtil.ts";

export class TwitterScraper {
    private scraper: Scraper;

    constructor() {}

    public getScraper(): Scraper {
        return this.scraper;
    }

    public async getUserIdByScreenName(screenName: string) {
        return await this.scraper.getUserIdByScreenName(screenName);
    }

    public async login() {
        this.scraper = new Scraper();
        const username = process.env.TWITTER_USERNAME;
        const password = process.env.TWITTER_PASSWORD;
        const email = process.env.TWITTER_EMAIL;
        const twitter2faSecret = process.env.TWITTER_2FA_SECRET;
        if (!username || !password) {
            elizaLogger.error(
                "Twitter credentials not configured in environment"
            );
            return;
        }

        // Login with credentials
        await this.scraper.login(username, password, email, twitter2faSecret);
        if (!(await this.scraper.isLoggedIn())) {
            elizaLogger.error("Failed to login to Twitter");
            return false;
        }
    }

    public async getUserLatestTweet(userId: string) {
        const onboardingTaskUrl =
            "https://api.twitter.com/1.1/onboarding/task.json";
        const cookies = await (this.scraper as any).auth
            .cookieJar()
            .getCookies(onboardingTaskUrl);
        const xCsrfToken = cookies.find((cookie) => cookie.key === "ct0");

        //@ ts-expect-error - This is a private API.
        const headers = {
            authorization: `Bearer ${(this.scraper as any).auth.bearerToken}`,
            cookie: await (this.scraper as any).auth
                .cookieJar()
                .getCookieString(onboardingTaskUrl),
            "content-type": "application/json",
            "User-Agent":
                "Mozilla/5.0 (Linux; Android 11; Nokia G20) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.88 Mobile Safari/537.36",
            "x-guest-token": (this.scraper as any).guestToken,
            "x-twitter-auth-type": "OAuth2Client",
            "x-twitter-active-user": "yes",
            "x-twitter-client-language": "en",
            "x-csrf-token": xCsrfToken?.value,
        };

        const variables = {
            userId: userId,
            count: 1,
            includePromotedContent: true,
            withQuickPromoteEligibilityTweetFields: true,
            withVoice: true,
            withV2Timeline: true,
        };
        const features = {
            profile_label_improvements_pcf_label_in_post_enabled: false,
            rweb_tipjar_consumption_enabled: true,
            tweetypie_unmention_optimization_enabled: false,
            responsive_web_graphql_exclude_directive_enabled: true,
            verified_phone_label_enabled: false,
            creator_subscriptions_tweet_preview_api_enabled: true,
            responsive_web_graphql_timeline_navigation_enabled: true,
            responsive_web_graphql_skip_user_profile_image_extensions_enabled:
                false,
            premium_content_api_read_enabled: false,
            communities_web_enable_tweet_community_results_fetch: true,
            c9s_tweet_anatomy_moderator_badge_enabled: true,
            responsive_web_grok_analyze_button_fetch_trends_enabled: false,
            responsive_web_grok_analyze_post_followups_enabled: true,
            responsive_web_grok_share_attachment_enabled: true,
            articles_preview_enabled: true,
            responsive_web_edit_tweet_api_enabled: true,
            graphql_is_translatable_rweb_tweet_is_translatable_enabled: true,
            view_counts_everywhere_api_enabled: true,
            longform_notetweets_consumption_enabled: true,
            responsive_web_twitter_article_tweet_consumption_enabled: true,
            tweet_awards_web_tipping_enabled: false,
            creator_subscriptions_quote_tweet_preview_enabled: false,
            freedom_of_speech_not_reach_fetch_enabled: true,
            standardized_nudges_misinfo: true,
            tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled:
                true,
            rweb_video_timestamps_enabled: true,
            longform_notetweets_rich_text_read_enabled: true,
            longform_notetweets_inline_media_enabled: true,
            responsive_web_enhance_cards_enabled: false,
        };
        const fieldToggles = {
            withArticlePlainText: false,
        };
        const variablesUrlEncoded = encodeURIComponent(
            JSON.stringify(variables)
        );
        const featureUrlEncoded = encodeURIComponent(JSON.stringify(features));
        const fieldTogglesUrlEncoded = encodeURIComponent(
            JSON.stringify(fieldToggles)
        );
        const endpoint = `https://twitter.com/i/api/graphql/V7H0Ap3_Hh2FyS75OCDO3Q/UserTweets?variables=${variablesUrlEncoded}&features=${featureUrlEncoded}&fieldToggles=${fieldTogglesUrlEncoded}`;
        const responseParsePath =
            "$.data.user.result.timeline_v2.timeline.instructions[1].entry.content.itemContent.tweet_results.result.legacy.full_text";
        const attestation = await generateProof(
            endpoint,
            "GET",
            headers,
            undefined,
            responseParsePath
        );
        //log attestation
        elizaLogger.info(
            "Tweet getting proof generated successfully:",
            attestation
        );
        const verifyResult = verifyProof(attestation);
        if (!verifyResult) {
            throw new Error(
                "Verify attestation failed,data from source is illegality"
            );
        }
        const responseData = JSON.parse(attestation.data);
        const content = responseData.content;
        //log
        elizaLogger.info(`get tweet content success:${content}`);
        return this.removeEmojis(content);
    }

    private isEmoji(char: string) {
        const codePoint = char.codePointAt(0);
        return (
            (codePoint >= 0x1f600 && codePoint <= 0x1f64f) ||
            (codePoint >= 0x1f300 && codePoint <= 0x1f5ff) ||
            (codePoint >= 0x1f680 && codePoint <= 0x1f6ff) ||
            (codePoint >= 0x2600 && codePoint <= 0x26ff) ||
            (codePoint >= 0x2700 && codePoint <= 0x27bf) ||
            (codePoint >= 0x1f900 && codePoint <= 0x1f9ff) ||
            (codePoint >= 0x1f1e6 && codePoint <= 0x1f1ff)
        );
    }

    private removeEmojis(input: string) {
        return Array.from(input)
            .filter((char) => !this.isEmoji(char))
            .join("");
    }

    public async sendTweet(content: string) {
        const onboardingTaskUrl =
            "https://api.twitter.com/1.1/onboarding/task.json";

        const cookies = await (this.scraper as any).auth
            .cookieJar()
            .getCookies(onboardingTaskUrl);
        const xCsrfToken = cookies.find((cookie) => cookie.key === "ct0");

        //@ ts-expect-error - This is a private API.
        const headers = {
            authorization: `Bearer ${(this.scraper as any).auth.bearerToken}`,
            cookie: await (this.scraper as any).auth
                .cookieJar()
                .getCookieString(onboardingTaskUrl),
            "content-type": "application/json",
            "User-Agent":
                "Mozilla/5.0 (Linux; Android 11; Nokia G20) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.88 Mobile Safari/537.36",
            "x-guest-token": (this.scraper as any).guestToken,
            "x-twitter-auth-type": "OAuth2Client",
            "x-twitter-active-user": "yes",
            "x-twitter-client-language": "en",
            "x-csrf-token": xCsrfToken?.value,
        };

        const variables = {
            tweet_text: content,
            dark_request: false,
            media: {
                media_entities: [],
                possibly_sensitive: false,
            },
            semantic_annotation_ids: [],
        };
        const bodyStr = JSON.stringify({
            variables,
            features: {
                interactive_text_enabled: true,
                longform_notetweets_inline_media_enabled: false,
                responsive_web_text_conversations_enabled: false,
                tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled:
                    false,
                vibe_api_enabled: false,
                rweb_lists_timeline_redesign_enabled: true,
                responsive_web_graphql_exclude_directive_enabled: true,
                verified_phone_label_enabled: false,
                creator_subscriptions_tweet_preview_api_enabled: true,
                responsive_web_graphql_timeline_navigation_enabled: true,
                responsive_web_graphql_skip_user_profile_image_extensions_enabled:
                    false,
                tweetypie_unmention_optimization_enabled: true,
                responsive_web_edit_tweet_api_enabled: true,
                graphql_is_translatable_rweb_tweet_is_translatable_enabled:
                    true,
                view_counts_everywhere_api_enabled: true,
                longform_notetweets_consumption_enabled: true,
                tweet_awards_web_tipping_enabled: false,
                freedom_of_speech_not_reach_fetch_enabled: true,
                standardized_nudges_misinfo: true,
                longform_notetweets_rich_text_read_enabled: true,
                responsive_web_enhance_cards_enabled: false,
                subscriptions_verification_info_enabled: true,
                subscriptions_verification_info_reason_enabled: true,
                subscriptions_verification_info_verified_since_enabled: true,
                super_follow_badge_privacy_enabled: false,
                super_follow_exclusive_tweet_notifications_enabled: false,
                super_follow_tweet_api_enabled: false,
                super_follow_user_api_enabled: false,
                android_graphql_skip_api_media_color_palette: false,
                creator_subscriptions_subscription_count_enabled: false,
                blue_business_profile_image_shape_enabled: false,
                unified_cards_ad_metadata_container_dynamic_card_content_query_enabled:
                    false,
                rweb_video_timestamps_enabled: false,
                c9s_tweet_anatomy_moderator_badge_enabled: false,
                responsive_web_twitter_article_tweet_consumption_enabled: false,
            },
            fieldToggles: {},
        });
        const endpoint = 'https://twitter.com/i/api/graphql/a1p9RWpkYKBjWv_I3WzS-A/CreateTweet';
        const method = 'POST';
        const attestation = await generateProof(endpoint,method,headers,bodyStr,"$.data.create_tweet.tweet_results.result.rest_id");

        elizaLogger.info(
            "Tweet posting proof generated successfully:",
            attestation
        );

        const verifyResult = verifyProof(attestation);
        if (!verifyResult) {
            throw new Error(
                "Verify attestation failed, data from source is illegality"
            );
        }
        const responseData = JSON.parse(attestation.data);
        elizaLogger.info(`send tweet success,tweetId:${responseData.content}`);

        return responseData.content;
    }
}
