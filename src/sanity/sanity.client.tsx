import { createClient } from '@sanity/client';

const client = createClient({
    projectId: 'a5l3j12k',
    dataset: 'production',
    apiVersion: '2023-05-16',
    useCdn: true
});

export default client;
