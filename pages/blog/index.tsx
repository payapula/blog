import { Heading, SimpleGrid } from '@chakra-ui/react';
import { Card } from 'mycomponents/card';
import { Layout } from 'mycomponents/layout';
import React, { ReactElement } from 'react';

function BlogCard() {
    return <Card override={{ width: '100%', border: '1px solid teal' }} />;
}

export default function Index(): ReactElement {
    return (
        <Layout>
            <Heading as="h1" width="100px" mx="auto" mt="8">
                Blog
            </Heading>
            <SimpleGrid
                columns={[1, null, null, null, 2, 3]}
                mt="10"
                spacing={[10, null, null, null]}>
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </SimpleGrid>
        </Layout>
    );
}
