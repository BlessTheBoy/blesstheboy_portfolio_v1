import styled from "styled-components";
import useScript from "../../../hooks/useScript";
import "./style.scss";
// import ScriptTag from "react-script-tag";

const StyledNewsletterForm = styled.section`
  background-color: ${(props) => props.theme.contactBody};
  color: ${(props) => props.theme.fontColor};
  background-image:
    /* top layer simulates a solid background */ linear-gradient(
      ${(props) => props.theme.contactBody},
      ${(props) => props.theme.contactBody}
    ),
    /* bottom layer is a multi-color gradient */
      linear-gradient(to right, red, orange, yellow, green, blue, purple);
  background-origin:
    /* top layer constrained to padding-box */ padding-box,
    /* bottom layer constrained to border-box;
       it shows under the transparent border */
      border-box;
  background-repeat: no-repeat;
  display: inline-block;
`;

function NewsletterForm() {
  useScript(
    "https://zcmpsub.campaign-view.com/js/optin.min.js",
    "text/javascript",
    "setupSF('sf3z958097cc08c5c74c62c3406d9580a17740043445785f866aac245c95fac46ae6','ZCFORMVIEW',false,'light',false,'0')"
  );
  return (
    <div>
      {/* <!--Zoho Campaigns Web-Optin Form's Header Code Starts Here--> */}
      {/* <script
        type="text/javascript"
        src="https://zcmpsub.campaign-view.com/js/optin.min.js"
        onload="setupSF('sf3z958097cc08c5c74c62c3406d9580a17740043445785f866aac245c95fac46ae6','ZCFORMVIEW',false,'light',false,'0')"
      ></script>
      <script type="text/javascript">
        function
        runOnFormSubmit_sf3z958097cc08c5c74c62c3406d9580a17740043445785f866aac245c95fac46ae6(th) */}
      {/*Before submit, if you want to trigger your event, "include your code here"*/}
      {/* </script> */}
      {/* <!--Zoho Campaigns Web-Optin Form's Header Code Ends Here--><!--Zoho Campaigns Web-Optin Form Starts Here--> */}
      <div
        id="sf3z958097cc08c5c74c62c3406d9580a17740043445785f866aac245c95fac46ae6"
        data-type="signupform"
        style={{ opacity: 1 }}
      >
        <div id="customForm">
          <StyledNewsletterForm
            class="quick_form_5_css"
            id="quick_form_5_css1"
            name="SIGNUP_BODY"
            // style={{ backgroundImage: "url(images/neonWall.jpg)" }}
          >
            <div>
              <div id="SIGNUP_HEADING">
                Sign up to my weekly newsletter to follow my Developer journey.
              </div>
              <div style={{ position: "relative" }}>
                <div id="Zc_SignupSuccess">
                  <table
                    width="100%"
                    cellpadding="0"
                    cellspacing="0"
                    border="0"
                  >
                    <tbody>
                      <tr>
                        <td width="10%">
                          <img
                            class="successicon"
                            src="https://zcmpsub.campaign-view.com/images/challangeiconenable.jpg"
                            align="absmiddle"
                          />
                        </td>
                        <td>
                          <span id="signupSuccessMsg">
                            &nbsp;&nbsp;Thank you for Signing Up
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <form
                method="POST"
                id="zcampaignOptinForm"
                action="https://maillist-manage.com/weboptin.zc"
                target="_zcSignup"
              >
                <div id="errorMsgDiv">
                  Please correct the marked field(s) below.
                </div>
                <div class="SIGNUP_FLD" id="SIGNUP_FLD1">
                  <input
                    type="text"
                    placeholder="Email"
                    changeitem="SIGNUP_FORM_FIELD"
                    name="CONTACT_EMAIL"
                    id="EMBED_FORM_EMAIL_LABEL"
                  />
                </div>
                <div class="SIGNUP_FLD" id="SIGNUP_FLD2">
                  <input
                    type="text"
                    placeholder="First name"
                    changeitem="SIGNUP_FORM_FIELD"
                    name="FIRSTNAME"
                    id="FIRSTNAME"
                  />
                </div>
                <div class="SIGNUP_FLD" id="SIGNUP_FLD3">
                  <button
                    name="SIGNUP_SUBMIT_BUTTON"
                    id="zcWebOptin"
                    type="submit"
                  >
                    Join Now
                  </button>
                  {/* <input
                    type="button"
                    name="SIGNUP_SUBMIT_BUTTON"
                    id="zcWebOptin"
                    value="Join Now"
                  /> */}
                </div>
                <input type="hidden" id="fieldBorder" value="" />
                <input
                  type="hidden"
                  id="submitType"
                  name="submitType"
                  value="optinCustomView"
                />
                <input
                  type="hidden"
                  id="emailReportId"
                  name="emailReportId"
                  value=""
                />
                <input
                  type="hidden"
                  id="formType"
                  name="formType"
                  value="QuickForm"
                />
                <input type="hidden" name="zx" id="cmpZuid" value="12cf15450" />
                <input type="hidden" name="zcvers" value="3.0" />
                <input
                  type="hidden"
                  name="oldListIds"
                  id="allCheckedListIds"
                  value=""
                />
                <input
                  type="hidden"
                  id="mode"
                  name="mode"
                  value="OptinCreateView"
                />
                <input
                  type="hidden"
                  id="zcld"
                  name="zcld"
                  value="1b8f69fefe8c3415"
                />
                <input type="hidden" id="zctd" name="zctd" value="" />
                <input type="hidden" id="document_domain" value="" />
                <input
                  type="hidden"
                  id="zc_Url"
                  value="zcmpsub.campaign-view.com"
                />
                <input type="hidden" id="new_optin_response_in" value="0" />
                <input
                  type="hidden"
                  id="duplicate_optin_response_in"
                  value="0"
                />
                <input
                  type="hidden"
                  name="zc_trackCode"
                  id="zc_trackCode"
                  value="ZCFORMVIEW"
                />
                <input
                  type="hidden"
                  id="zc_formIx"
                  name="zc_formIx"
                  value="3z958097cc08c5c74c62c3406d9580a17740043445785f866aac245c95fac46ae6"
                />
                <input type="hidden" id="viewFrom" value="URL_ACTION" />
                <span style={{ display: "none" }} id="dt_CONTACT_EMAIL">
                  1,true,6,Contact Email,2
                </span>
                <span style={{ display: "none" }} id="dt_FIRSTNAME">
                  1,false,1,First Name,2
                </span>
                <span style={{ display: "none" }} id="dt_LASTNAME">
                  1,false,1,Last Name,2
                </span>
              </form>
            </div>
          </StyledNewsletterForm>
        </div>
        <img
          src="https://zcmpsub.campaign-view.com/images/spacer.gif"
          id="refImage"
          onload="referenceSetter(this)"
          style={{ display: "none" }}
        />
      </div>
      <input type="hidden" id="signupFormType" value="QuickForm_Horizontal" />
      <div id="zcOptinOverLay" oncontextmenu="return false"></div>
      <div id="zcOptinSuccessPopup">
        <span id="closeSuccess">
          <img src="https://zcmpsub.campaign-view.com/images/videoclose.png" />
        </span>
        <div id="zcOptinSuccessPanel"></div>
      </div>
      {/* <!--Zoho Campaigns Web-Optin Form Ends Here-->\ */}
    </div>
  );
}

export default NewsletterForm;
