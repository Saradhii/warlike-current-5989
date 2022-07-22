import styled from "styled-components";

export const InformationPageDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;

  > div {
    display: flex;
    flex: 1 0 auto;
    padding: 0 5%;
    width: 90%;
    max-width: 78.5714285714em;
    margin: auto;

    > .main {
      padding-top: 4em;
      width: 52%;
      float: left;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`;

export const InfoHeaderDiv = styled.div`
  padding-bottom: 2em;
  color: #545454;

  width: fit-content;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 0.8571428571em;

  .MuiTypography-body1 {
    font-size: 0.9571428571em;
  }
`;

export const FormDiv = styled.div`
  > div:nth-child(1) {
    .userDivHeading {
      display: flex;
      justify-content: space-between;
      align-items: center;
      > p:last-child {
        color: #545454;
        font-size: 14px;
      }
    }

    > .section__content {
      display: inline-block;
      width: 100%;

      /* >.fieldset {
        margin: -0.4285714286em;
        zoom: 1;

        > .field {
          width: 100%;
          float: left;
          padding: 0.4285714286em;
          box-sizing: border-box;

          > .field__input-wrapper {
            position: relative;

            > label {
              color: #737373;
              font-size: 0.7571428571em;
              font-weight: normal;
              position: absolute;
              top: 0;
              width: 100%;
              margin-top: 0.4285714286em;
              margin-left: 1px;
              padding: 0 0.9166666667em;
              z-index: 1;
              user-select: none;
              transform: translateY(3px);
              pointer-events: none;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              box-sizing: border-box;
              opacity: 0;
              transition: all 0.2s ease-out;
              margin: 0.5em 0;
              display: block;
            }

            > input {
              background-color: white;
              color: #333333;
              border-color: #d9d9d9;
              border: 1px transparent solid;
              background-clip: padding-box;
              border-radius: 5px;
              display: block;
              box-sizing: border-box;
              width: 100%;
              padding: 0.9285714286em 0.7857142857em;
              word-break: normal;
              line-height: inherit;
              transition: all 0.2s ease-out;
              background-color: white;
              color: #333333;
              border-color: #d9d9d9;

              :focus {
                outline: none;
                border-color: #2d2d2d;
                box-shadow: 0 0 0 1px #2d2d2d;
                padding-top: 1.5em;
                padding-bottom: 0.3571428571em;
                outline: none;
                border-color: #2d2d2d;
                box-shadow: 0 0 0 1px #2d2d2d;

                ::placeholder {
                  visibility: hidden;
                }

                ~ label {
                  transform: none;
                  opacity: 1;
                }
              }
            }
          }
        }
      } */

      > .fieldset-description {
        margin-top: 0.9285714286em;

        .section__content {
          zoom: 1;

          > div {
            margin-bottom: 0;
            display: table;
            box-sizing: border-box;
            width: 100%;

            > .checkbox__input {
              display: table-cell;
              padding-right: 0.75em;
              white-space: nowrap;

              > input:first-child {
                color: inherit;
                font: inherit;
                margin: 0;
                padding: 0;
                appearance: none;
                border: none;
                background: transparent;
                line-height: normal;
              }

              > .input-checkbox {
                color: inherit;
                font: inherit;
                margin: 0;
                padding: 0;
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
                -webkit-font-smoothing: inherit;
                border: none;
                background: transparent;
                line-height: normal;

                border-color: #d9d9d9;
                background-color: white;
                border-radius: 4px;
                box-sizing: border-box;
                padding: 0;
                width: 18px;
                height: 18px;
                transition: all 0.2s ease-in-out;
                position: relative;
                cursor: pointer;
                vertical-align: -4px;
                border: 1px solid;
                margin-right: 0.65em;
                white-space: nowrap;

                :checked {
                }

                :checked {
                  appearance: none;
                  border-color: #2d2d2d;
                  border-width: 9px;

                  :after {
                    transform: scale(1);
                    -webkit-transition-delay: 0.1s;
                    transition-delay: 0.1s;
                    opacity: 1;
                  }
                }

                :after {
                  content: "";
                  display: block;
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  -webkit-transform: scale(0.2);
                  transform: scale(0.2);
                  -webkit-transition: all 0.2s ease-in-out;
                  transition: all 0.2s ease-in-out;
                  opacity: 0;
                  width: 10px;
                  height: 8px;
                  margin-left: -5px;
                  margin-top: -4px;
                  background-image: url("https://cdn.shopify.com/shopifycloud/shopify/assets/checkout_2021-01-25/checkbox-tick-8f61c047ddf394995dc729e4ed5672dfd5185ceb994e4acca120c3ddc11e4012.png");
                  background-image: url("https://cdn.shopify.com/shopifycloud/shopify/assets/checkout_2021-01-25/checkbox-tick-66a9a39f70a44a226223ef4c61a701d2d10afaa73ba8846a509fbe58a82f3f36.svg"),
                    none;
                }
              }

              > label {
                color: #545454;
                font-size: 14px;
              }
            }
          }
        }
        > .address_Form {
          padding-top: 2em;

          > .address_Form__header {
            margin-bottom: 1.5em;

            > .address_Form__title {
              color: #333333;
              font-weight: normal;
              margin: 0;
              font-family: Helvetica Neue, sans-serif;
              font-size: 1.2857142857em;
              line-height: 1.3em;
            }
          }

          > .address_Form__inputs {
            display: flex;
            flex-direction: column;
            gap: 0.8285714286em;

            > .address_Form_name {
              display: flex;
              gap: 0.8285714286em;

              > div {
                width: 100%;
              }
            }
          }
        }

        .step__footer {
          @media (min-width: 750px) {
            padding-bottom: 4em;
          }
          @media (min-width: 750px) {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          @media (min-width: 750px) {
            margin-top: 1.5em;
          }
          z-index: 2;
          position: relative;
          margin-top: 1em;

          > div,
          button {
            cursor: pointer;
            display: flex;
            align-items: center;
          }

          > button {
            display: inline-block;
            background-color: #000000;
            background-clip: border-box;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            border: 1px transparent solid;
            border-radius: 5px;
            color: white;
            font-weight: 500;
            padding: 1.4em 1.7em;
            text-align: center;
            position: relative;
            -webkit-transition: background-color 0.2s ease-in-out,
              color 0.2s ease-in-out, -webkit-box-shadow 0.2s ease-in-out;
            transition: background-color 0.2s ease-in-out,
              color 0.2s ease-in-out, -webkit-box-shadow 0.2s ease-in-out;
            transition: background-color 0.2s ease-in-out,
              color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
            transition: background-color 0.2s ease-in-out,
              color 0.2s ease-in-out, box-shadow 0.2s ease-in-out,
              -webkit-box-shadow 0.2s ease-in-out;

            @media (min-width: 750px) {
              float: right;
            }
          }
        }

        .main__footer {
          padding: 1em 0;
          border-top: 1px solid #e6e6e6;

          > ul {
            text-align: center;
            margin: 0;
            padding: 0;
            list-style-type: none;
            > li {
              float: left;
              font-size: 0.7571428571em;
              margin-right: 1.5em;
              margin-bottom: 0.5em;
              text-decoration: none;
              color: #2d2d2d;
              transition: color 0.2s ease-in-out;
            }
          }
        }
      }
    }
  }
`;

export const PromoDiv = styled.div``;

export const Fieldset = styled.div`
  margin: -0.4285714286em;
  zoom: 1;
  max-height: 58px;

  > .field {
    width: 100%;
    float: left;
    padding: 0.4285714286em;
    box-sizing: border-box;

    > .field__input-wrapper {
      position: relative;

      > label {
        color: #737373;
        font-size: 0.7571428571em;
        font-weight: normal;
        position: absolute;
        top: 0;
        width: 100%;
        margin-top: 0.4285714286em;
        margin-left: 1px;
        padding: 0 0.9166666667em;
        z-index: 1;
        user-select: none;
        transform: translateY(3px);
        pointer-events: none;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        box-sizing: border-box;
        opacity: 0;
        transition: all 0.2s ease-out;
        margin: 0.5em 0;
        display: block;
      }

      > input {
        background-color: white;
        color: #333333;
        border-color: #d9d9d9;
        border: 1px transparent solid;
        background-clip: padding-box;
        border-radius: 5px;
        display: block;
        box-sizing: border-box;
        width: 100%;
        padding: 0.9285714286em 0.7857142857em;
        word-break: normal;
        line-height: inherit;
        transition: all 0.2s ease-out;
        background-color: white;
        color: #333333;
        border-color: #d9d9d9;

        :focus {
          outline: none;
          border-color: #2d2d2d;
          box-shadow: 0 0 0 1px #2d2d2d;
          padding-top: 1.5em;
          padding-bottom: 0.3571428571em;
          outline: none;
          border-color: #2d2d2d;
          box-shadow: 0 0 0 1px #2d2d2d;

          ::placeholder {
            visibility: hidden;
          }

          ~ label {
            transform: none;
            opacity: 1;
          }
        }
      }
    }
  }
`;
