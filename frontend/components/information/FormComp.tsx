import Link from "next/link";
import React from "react";
import { FormDiv } from "./formStyled";
import InputComp from "./inputComp";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

const FormComp = () => {
  return (
    <FormDiv>
      <div className="userDiv">
        <div className="userDivHeading">
          <p>Contact information</p>
          <p>
            Already have an account?
            <span>
              <Link href={"/login"}>{" Log in"}</Link>
            </span>
          </p>
        </div>
        <div className="section__content">
          <InputComp label="Email" />

          <div className="fieldset-description" data-buyer-accepts-marketing="">
            <div className="section__content">
              <div className="checkbox-wrapper">
                <div className="checkbox__input">
                  <input name="checkout" type="hidden" value="0" />
                  <input
                    className="input-checkbox"
                    type="checkbox"
                    value="1"
                    defaultChecked={true}
                    name="checkout"
                    id="checkout_buyer_accepts_marketing"
                  />
                  <label
                    className="checkbox__label"
                    htmlFor="checkout_buyer_accepts_marketing"
                  >
                    Email me with news and offers
                  </label>
                </div>
              </div>
            </div>

            <div className="address_Form">
              <div className="address_Form__header">
                <h2 className="address_Form__title">Shipping address</h2>
              </div>

              <div className="address_Form__inputs">
                <InputComp label="Country/region" />

                <div className="address_Form_name">
                  <InputComp label="First Name" />
                  <InputComp label="Last Name" />
                </div>

                <InputComp label="Company (optional)" />

                <InputComp label="Address" />

                <InputComp label="Apartment, suite, etc. (optional)" />

                <div className="address_Form_name">
                  <InputComp label="City" />
                  <InputComp label="State" />
                  <InputComp label="PIN code" />
                </div>

                <InputComp
                  label="Phone"
                  tootip={{
                    title: "In case we need to contact you about your order",
                    placement: "top",
                  }}
                />

                <div className="section__content">
                  <div className="checkbox-wrapper">
                    <div className="checkbox__input">
                      <input name="checkout" type="hidden" value="0" />
                      <input
                        className="input-checkbox"
                        type="checkbox"
                        value="1"
                        name="checkout"
                        id="checkout_buyer_accepts_marketing"
                      />
                      <label
                        className="checkbox__label"
                        htmlFor="checkout_buyer_accepts_marketing"
                      >
                        Save this information for next time
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="step__footer" data-step-footer="">
              <Link className="step__footer__previous-link" href={`/Cart/{id}`}>
                <div style={{
            cursor: "pointer"
                }}>
                  <NavigateBeforeIcon fontSize="small" />
                  <span className="step__footer__previous-link-content">
                    Return to cart
                  </span>
                </div>
              </Link>
              <button
                name="button"
                type="submit"
                id="continue_button"
                className="step__footer__continue-btn btn"
              >
                <span className="btn__content">Continue to shipping</span>
              </button>
            </div>

            <div className="main__footer">
              <ul className="policy-list" role="list">
                <li className="policy-list__item ">
                  <Link
                    href="/"
                  >
                    Refund policy
                  </Link>
                </li>
                <li className="policy-list__item ">
                  <Link
                    href="/"
                  >
                    Privacy policy
                  </Link>
                </li>
                <li className="policy-list__item ">
                  <Link
                    href="/"
                  >
                    Terms of service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </FormDiv>
  );
};

export default FormComp;
