declare module '@splidejs/react-splide' {
  interface SplideOptions {
    perPage?: number;
  }

  interface SplideInstance {
    mount(): void;
  }

  interface Splide {
    splide(options: SplideOptions): SplideInstance;
  }

  export const Splide: Splide;
  export const SplideSlide: any;
}
