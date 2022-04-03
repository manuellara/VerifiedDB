import React from 'react';

// Meilisearch
import "instantsearch.css/themes/algolia-min.css"
import {
    ClearRefinements,
    InstantSearch,
    SearchBox,
    Hits,
    Highlight,
    Pagination,
    Snippet,
    SortBy,
    RefinementList,
    Configure
} from 'react-instantsearch-dom';
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';

// css
import "./../styles/ms.css"

// MUI
import { Typography } from '@mui/material';


const searchClient = instantMeiliSearch(
    process.env.REACT_APP_API_URL,
    process.env.REACT_APP_API_KEY
);

const Meilisearch = () => (

    <div className="ais-InstantSearch">
        <InstantSearch indexName="verified" searchClient={searchClient}>

            <div className="left-panel">
                <ClearRefinements />

                <SortBy
                    defaultRefinement="verified"
                    items={
                        [
                            {
                                value: "verified",
                                label: "Default"
                            },
                            {
                                value: "verified:last_name:desc",
                                label: "Last Name Descending"
                            },
                            {
                                value: "verified:last_name:asc",
                                label: "Last Name Ascending"
                            }
                        ]
                    }
                />

                <h2>Social Media</h2>
                <RefinementList attribute="social_media" />

                <Configure
                    hitsPerPage={6}
                    attributesToSnippet={["description:50"]}
                    snippetEllipsisText={"..."}
                />
            </div>

            <div className="right-panel">
                <SearchBox />

                <Hits hitComponent={Hit} />

                <Pagination showLast={true} />
            </div>

        </InstantSearch>
    </div>

);

const Hit = ({ hit }) => (

    <div key={hit.id}>

        <div>
            <Typography variant='h6'>
                <Highlight attribute="first_name" hit={hit} />
                {" "}
                <Highlight attribute="last_name" hit={hit} />
            </Typography>
        </div>

        <img src={hit.poster} alt="alt-img-name" />

        <div>
            alias: <Highlight attribute="alias" hit={hit} />
        </div>

        <div>
            twitter: <Highlight attribute="twitter" hit={hit} />
        </div>

        <div>
            instagram: <Highlight attribute="instagram" hit={hit} />
        </div>

        <div className="hit-description">
            <Snippet attribute="description" hit={hit} />
        </div>

    </div>

);

export default Meilisearch