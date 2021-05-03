import { useMutation, useQuery, useLazyQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { perPage } from '../config';

import Pagination from './Pagination';

export const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY(
    $skip: Int = 0
    $first: Int
    $status: CarpetStatusType
  ) {
    allCarpets(first: $first, skip: $skip, where: { status: $status }) {
      id
      name
      address
      phoneNumber
      message
      city
    }
  }
`;

const UPDATE_CARPET_STATUS = gql`
  mutation UPDATE_CARPET_STATUS($id: ID!, $status: CarpetStatusType) {
    updateCarpet(id: $id, data: { status: $status }) {
      status
      id
    }
  }
`;

const ProductsListStyles = styled.div`
  display: flex;
  flex-direction: column;

  .single-carpet {
    padding: 2rem;
    box-shadow: 0px 4px 6px #00000029;
    margin: 2rem 0;
    font-weight: 100;

    .pointer {
      cursor: pointer;
    }
  }

  p {
    margin: 2.5rem 0;
    text-transform: capitalize;
    border-bottom: 1px solid #000;
    display: flex;
    justify-content: space-between;

    span {
      font-weight: 800;
      margin-right: 4rem;
      &:nth-of-type(2) {
        font-weight: 400;
        margin-right: 0;
        text-align: right;
      }
    }
  }
`;

export default function Products({ page }) {
  const [status, setStatus] = useState('Ordered');

  const [getCarpets, { data, error, loading }] = useLazyQuery(
    ALL_PRODUCTS_QUERY,
    {
      variables: {
        skip: page * perPage - perPage,
        first: perPage,
        status,
      },
    }
  );

  useEffect(() => {
    if (!data?.allCarpets) {
      getCarpets();
    }
  }, [data?.allCarpets]);

  useEffect(() => {
    getCarpets();
  }, [status]);

  const [updateCarpet] = useMutation(UPDATE_CARPET_STATUS);

  const onAddressClick = (address) => {
    window.open(`${'//' + 'google.com/search?q='}${address}`, '_blank');
  };

  console.log(page);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <ProductsListStyles>
        {/* <Pagination page={page} /> */}
        <div>
          <button onClick={() => setStatus('Ordered')}>Poracani</button>
          <button onClick={() => setStatus('Processing')}>Prevzemani</button>
          <button onClick={() => setStatus('Delivered')}>Zavrseni</button>
        </div>
        {data?.allCarpets.map((carpet) => (
          <div key={carpet.id} className="single-carpet">
            <p>
              <span>Ime:</span> <span>{carpet.name}</span>
            </p>
            <p>
              <span>Adresa: </span>
              <span
                className="pointer"
                onClick={() =>
                  onAddressClick(
                    `${carpet.address}, ${carpet.city.toLowerCase()}`
                  )
                }
              >
                {carpet.address}, {carpet.city.toLowerCase()}
              </span>
            </p>
            <p>
              <span>Tel broj: </span>
              <span className="pointer">
                <a href={`tel:+386${carpet.phoneNumber}`}>
                  +386 {carpet.phoneNumber}
                </a>
              </span>
            </p>
            <p>
              <span>Poraka: </span>
              <span>{carpet.message}</span>
            </p>
            <button
              type="button"
              onClick={() =>
                updateCarpet({
                  variables: { id: carpet.id, status: 'Processing' },
                })
              }
            >
              Prevzemano
            </button>
            <button
              type="button"
              onClick={() =>
                updateCarpet({
                  variables: { id: carpet.id, status: 'Delivered' },
                })
              }
            >
              Zavrseno
            </button>
          </div>
        ))}
      </ProductsListStyles>
    </div>
  );
}
