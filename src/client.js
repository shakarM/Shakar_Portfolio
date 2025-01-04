import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "52auq78o",
  dataset: "production",
  apiVersion: "2024-01-20",
  useCdn: true,
  token:
    "sk3A5TuHlbtcoDPJAiPPR6NanMMTlqQWoODISVw2INp3JqZGjXP53cNE0TmPRdkD3IbwXEZCe8fXnOeMCJ5SSM2REgd1HzbdafJEoaiw9GgyvjFsdUIl3CuXaM38MpcQkjyBMRyNvcUDWG79sNYqwjXQ2gTktxScnnfFF2pcxWaHqcuo2HAB",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
