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
    Configure,
    Stats
} from 'react-instantsearch-dom';
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';

// css
import "./../styles/ms.css"

// MUI 5 
import { Typography } from '@mui/material';


const searchClient = instantMeiliSearch(
    process.env.REACT_APP_API_URL,
    process.env.REACT_APP_API_KEY
);

const Meilisearch = () => (

    <div className="ais-InstantSearch">
        <InstantSearch indexName="verified-rcd" searchClient={searchClient}>

            <div className="left-panel">
                <ClearRefinements />

                <SortBy
                    defaultRefinement="verified-rcd"
                    items={
                        [
                            {
                                value: "verified-rcd",
                                label: "Default"
                            },
                            {
                                value: "verified-rcd:name:desc",
                                label: "Name Descending"
                            },
                            {
                                value: "verified-rcd:name:asc",
                                label: "Name Ascending"
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

                <Stats/>

                <Hits hitComponent={Hit} />

                <Pagination showLast={true} />
            </div>

        </InstantSearch>
    </div>

);

const Hit = ({ hit }) => (

    <div key={hit.id} onClick={() => console.log(hit.id)}>

        <div>
            <Typography variant='h6'>
                <Highlight attribute="name" hit={hit} />
            </Typography>
        </div>

        <img src={hit.poster} alt="alt-img-name" />

        <div>
            twitter: { hit.twitter == null ? "" : <Highlight attribute="twitter" hit={hit} /> }
        </div>

        <div>
            instagram: { hit.instagram == null ? "" : <Highlight attribute="instagram" hit={hit} /> }
        </div>

        <div className="hit-description">
            { hit.description == null ? "" : <Snippet attribute="description" hit={hit} /> }
        </div>

    </div>

);

export default Meilisearch