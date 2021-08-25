import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    background: #F0F0F0;
    border-radius: 0.5rem;

    th {
      color: #000;
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);

      &:first-child {
        color: var(--text-title);
      }

      &.deposit {
        color: var(--green);  
      }

      &.withdraw {
        color: var(--red);
      }
    }
  }
`