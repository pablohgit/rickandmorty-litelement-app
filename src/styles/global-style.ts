import { css } from "lit";

export const styleModule = css`
  .container {
    text-align: center;
    padding: 1rem;
  }

  .logo {
    width: 300px;
    margin-bottom: 1rem;
  }

  .search-container {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 1rem;
  }

  button {
    background-color: #00cfe8;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }

  .no-results {
    margin-top: 2rem;
  }

  .no-results img {
    width: 150px;
  }

  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin: 1rem 0 2rem;
  }

  .pagination button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
