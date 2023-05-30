import styled from "styled-components";

export const WidgetSearch = styled.aside`
  position: relative;
  margin: 40px 0 40px;
  display: block;
`;

export const SearchForm = styled.form`
  box-shadow: 0 0 15px 0 rgb(41 61 88 / 10%);
  display: block;
  margin-top: 0em;
`;

export const SearchLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  cursor: default;
  & span {
    clip: rect(1px, 1px, 1px, 1px);
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    transition: all 0.5s ease-in-out 0s;
  }
  & input {
    border-width: 1px;
    background-color: #fff;
    border-radius: 0;
    text-indent: 0;
    font-family: inherit;
    transition: border linear 0.2s, box-shadow linear 0.2s;
    vertical-align: middle;
    width: 100%;
    color: #242424;
    margin: 0;
    padding: 9px 15px;
    font-weight: 400;
    background-color: ${({ theme }) => theme.colors.white};
    text-transform: inherit;
    border: 1px solid #f2f2f2;
    font-size: 15px;
    outline: none;
    line-height: inherit;
    letter-spacing: 1px;
    outline-offset: -2px;
    -webkit-appearance: none;
    overflow: visible;
  }
`;

export const SearchInput = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  text-indent: -999px;
  padding: 0;
  width: 46px;
  height: 46px;
  z-index: 1;
  border-radius: 0 3px 3px 0;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAdCAYAAAC5UQwxAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjgyMjhGQUZCNjM3MTFFNkEyQkREQUYwMUY2Qjc5NDEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjgyMjhGQjBCNjM3MTFFNkEyQkREQUYwMUY2Qjc5NDEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCODIyOEZBREI2MzcxMUU2QTJCRERBRjAxRjZCNzk0MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCODIyOEZBRUI2MzcxMUU2QTJCRERBRjAxRjZCNzk0MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrfvcRAAAAFxSURBVHjavJaBccMgDEVtXxZgBa/ACs4I7QhegRXaEdwR2hGcEZwRnBGSESjK4R4hXwITu/9Ol7sc+AlJSNRVWq0z7X9DnZ2drLXVVnpzNjqzgl2dDeQMgXOMO1EKhMyUALX32hbatzMlAQ8RjE6mmBBTzm5BFFomDaT3VL4IMjM5MowT2p9oVXgXGbBpYk4Rq2egLQdUIG+zENoH+Y8g6MAB0eIu9+4EH4rDe0XABnz8fqEL7u1nXBd1XT853vjkh/op6RLOe3L0AgrrCYhaVqkuqQVN9c9qmNZWKpUDPKXiniNXIArsvSHgGbQnVcDswX+w2jW6tGvuoU9D3DxGqbWhcWRW5G0C+3sJqKVxI8A6pumPOfPQJKZ67wGdXzslXgI6ZwAPLwzfLCiS2RPKSa941yxDumXC/ABNicAfAD77gurDN4xQsX/QlwVyJEI3b94OSu3sCDoYOWJ2mRYSdLfxxEC/Ns8hc9m75RX3K8AAFHkZkykwzQsAAAAASUVORK5CYII=);
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 16px 16px;
  opacity: 0.3;
`;

export const SpecialHthree = styled.h3`
  font-weight: 600;
  font-size: 23px;
  line-height: 28px;
  margin-bottom: 25px;
  padding-left: 26px;
  color: ${({ theme }) => theme.colors.darkgreen};
`;

export const Divrow = styled.div`
  display: flex;
  justify-content: space-between;
`;
