import { css } from "lit";

export const styleModule = css`
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
`;
