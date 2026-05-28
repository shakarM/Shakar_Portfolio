import { client, urlFor } from "../config/client";

/**
 * Service to handle all Sanity CMS data fetching and interactions.
 * This abstracts the GROQ queries away from the UI components.
 */

// --- Portfolio / Works ---
export const fetchWorks = async () => {
    const query = '*[_type == "works"]';
    return await client.fetch(query);
};

export const fetchWorkCategories = async () => {
    // Can be optimized later to fetch distinct categories or a dedicated schema
    const query = '*[_type == "works"]';
    const works = await client.fetch(query);
    const categories = works.map((w) => w.tags[0]);
    return ["All", ...new Set(categories)]; // Returns unique categories
};

// --- Skills / Experiences ---
export const fetchSkills = async () => {
    const query = '*[_type == "skills"]';
    return await client.fetch(query);
};

export const fetchCertificates = async () => {
    const query = '*[_type == "certificates"]';
    return await client.fetch(query);
};

export const fetchExperiences = async () => {
    // We now fetch simple company logos (brands) instead of detailed work history
    const query = '*[_type == "brands"] | order(_createdAt asc)';
    return await client.fetch(query);
};

// --- About ---
export const fetchAbouts = async () => {
    const query = '*[_type == "abouts"]';
    return await client.fetch(query);
};

// --- Contact / Forms ---
export const submitContactMessage = async (formData) => {
    const contact = {
        _type: "contact",
        name: formData.name,
        email: formData.email,
        message: formData.message,
    };

    return await client.create(contact);
};

// Re-export urlFor for components that need to resolve image references
export { urlFor };
