import styled from 'styled-components'

export const Wrapper = styled.header`
  align-items: center;
  background-color: var(--color-header);
  border-bottom: 0.1rem solid var(--color-neutral5);
  display: flex;
  height: 8rem;
  backdrop-filter: blur(5px);
  position: sticky;
  top: 0;
  z-index: 999;
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`
