import Link from 'next/link';
import styled from 'styled-components';

const HeaderStyles = styled.header`
  padding: 0 10%;
  height: 8rem;

  display: flex;
  align-items: center;
  a {
    font-size: 2.4rem;
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <Link href="/">
        <a>Aladinko</a>
      </Link>
    </HeaderStyles>
  );
}
