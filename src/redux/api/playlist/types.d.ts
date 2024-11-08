namespace MY {
  interface IPlaylist {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
    items: Array<{
      collaborative: boolean;
      description: string;
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      images: Array<{
        url: string;
        height: number;
        width: number;
      }>;
      name: string;
      owner: {
        external_urls: {
          spotify: string;
        };
        followers: {
          href: string;
          total: number;
        };
        href: string;
        id: string;
        type: string;
        uri: string;
        display_name: string;
      };
      public: boolean;
      snapshot_id: string;
      tracks: {
        href: string;
        total: number;
      };
      type: string;
      uri: string;
    }>;
  }
  interface IOnePlaylist {
    collaborative: boolean;
    description: string;
    external_urls: {
      spotify: string;
    };
    followers: {
      href: string;
      total: number;
    };
    href: string;
    id: string;
    images: Array<{
      url: string;
      height: number;
      width: number;
    }>;
    name: string;
    owner: {
      external_urls: {
        spotify: string;
      };
      followers: {
        href: string;
        total: number;
      };
      href: string;
      id: string;
      type: string;
      uri: string;
      display_name: string;
    };
    public: boolean;
    snapshot_id: string;
    tracks: {
      href: string;
      limit: number;
      next: string;
      offset: number;
      previous: string;
      total: number;
      items: Array<{
        added_at: string;
        added_by: {
          external_urls: {
            spotify: string;
          };
          followers: {
            href: string;
            total: number;
          };
          href: string;
          id: string;
          type: string;
          uri: string;
        };
        is_local: boolean;
        track: {
          album: {
            album_type: string;
            total_tracks: number;
            available_markets: Array<string>;
            external_urls: {
              spotify: string;
            };
            href: string;
            id: string;
            images: Array<{
              url: string;
              height: number;
              width: number;
            }>;
            name: string;
            release_date: string;
            release_date_precision: string;
            restrictions: {
              reason: string;
            };
            type: string;
            uri: string;
            artists: Array<{
              external_urls: {
                spotify: string;
              };
              href: string;
              id: string;
              name: string;
              type: string;
              uri: string;
            }>;
          };
          artists: Array<{
            external_urls: {
              spotify: string;
            };
            href: string;
            id: string;
            name: string;
            type: string;
            uri: string;
          }>;
          available_markets: Array<string>;
          disc_number: number;
          duration_ms: number;
          explicit: boolean;
          external_ids: {
            isrc: string;
            ean: string;
            upc: string;
          };
          external_urls: {
            spotify: string;
          };
          href: string;
          id: string;
          is_playable: boolean;
          linked_from: {};
          restrictions: {
            reason: string;
          };
          name: string;
          popularity: number;
          preview_url: string;
          track_number: number;
          type: string;
          uri: string;
          is_local: boolean;
        };
      }>;
    };
    type: string;
    uri: string;
  }

  type PlayListResponse = IPlaylist;
  type PlayListRequest = void;

  type PlayDetResponse = IOnePlaylist;
  type PlayDetRequest = string;
}
