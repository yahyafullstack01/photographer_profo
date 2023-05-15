import { createClient } from '@sanity/client';

const client = createClient({
    projectId: 'a5l3j12k',
    dataset: 'production',
});

export default client;
