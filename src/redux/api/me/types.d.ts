namespace ME {
  interface IUser {
    country: string;
    display_name: string;
    email: string;
    explicit_content: {
      filter_enabled: boolean;
      filter_locked: boolean;
    };
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
    product: string;
    type: string;
    uri: string;
  }

  type GetMeResponse = IUser;
  type GetMeRequest = void;
}