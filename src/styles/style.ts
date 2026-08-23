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
    gap: 1rem;
    margin-bottom: 1rem;
  }

  input {
    padding: 0.5rem;
    border: 1px solid #00cfe8;
    width: 40%;
  }

  button {
    background-color: #00cfe8;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }

  .filters {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin: 1rem 0;
    flex-wrap: wrap;
  }

  select {
    padding: 0.5rem;
    background-color: #00cfe8;
    border: none;
    color: white;
  }

  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    padding: 1rem;
  }

  .card {
    border: 1px solid #00cfe8;
    background: white;
    padding: 0.5rem;
    text-align: left;
  }

  .card img {
    width: 100%;
    height: auto;
  }

  .info {
    padding: 0.5rem 0;
  }

  .no-results {
    margin-top: 2rem;
  }

  .no-results img {
    width: 150px;
  }
`;
