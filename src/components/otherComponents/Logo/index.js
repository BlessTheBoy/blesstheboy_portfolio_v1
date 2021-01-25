import styled from "styled-components";

const StyledLogo = styled.div`
    cursor: pointer;
  & svg {
    fill: ${(props) => props.theme.fontColor};
    object-fit: contain;
    width 120px;
  }
`;

export const Logo = () => {
  return (
    <StyledLogo>
      <svg
        width="183"
        height="53"
        viewBox="0 0 183 53"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M23.8041 6.14043C23.9072 8.37332 23.6804 10.4511 23.1235 12.3739C22.5873 14.2967 21.8243 15.961 20.8344 17.3669C19.8445 18.7728 18.6793 19.8789 17.3388 20.6852C15.9983 21.4708 14.5959 21.843 13.1317 21.8016C11.9768 21.781 10.9353 21.5329 10.0073 21.0573C9.0999 20.5611 8.31622 19.9099 7.65629 19.1036C7.01697 18.2973 6.5014 17.3772 6.10956 16.3435C5.73835 15.3097 5.5115 14.2346 5.429 13.1182C5.34651 11.0921 5.66617 9.27267 6.38797 7.66003C7.1304 6.02672 8.14093 4.65184 9.41955 3.5354C10.7188 2.39828 12.2243 1.52994 13.936 0.930368C15.6683 0.310123 17.4831 0 19.3805 0C20.7003 0 21.9686 0.134387 23.1854 0.40316C24.4847 0.671933 25.7736 1.09577 27.0522 1.67466C28.3308 2.25356 29.5064 2.96684 30.5787 3.81451C31.4449 3.15292 32.373 2.63604 33.3629 2.2639C34.3734 1.87107 35.518 1.62298 36.7966 1.5196C37.5596 1.47825 38.2917 1.56095 38.9929 1.7677C39.7147 1.95377 40.354 2.23288 40.9109 2.60503C41.4883 2.97718 41.9626 3.42169 42.3339 3.93856C42.7051 4.45543 42.9422 5.02399 43.0453 5.64424C43.1278 6.16111 43.0969 6.62629 42.9525 7.03979C42.8288 7.45329 42.6329 7.80476 42.3648 8.09421C42.1173 8.38365 41.8183 8.61108 41.4677 8.77648C41.1377 8.9212 40.7974 8.99356 40.4468 8.99356C39.5188 8.99356 38.7455 8.425 38.1268 7.28789C38.4361 7.28789 38.6836 7.2362 38.8692 7.13282C39.0548 7.02945 39.1992 6.9054 39.3023 6.76068C39.4054 6.59528 39.4673 6.42988 39.4879 6.26448C39.5291 6.07841 39.5394 5.92335 39.5188 5.7993C39.4363 5.3031 39.1889 4.84825 38.7764 4.43476C38.3846 4.00058 37.7865 3.76282 36.9822 3.72147C36.0748 3.7008 35.2086 3.84552 34.3837 4.15564C33.5794 4.44509 32.8473 4.83792 32.1873 5.33411H32.2801C33.2701 6.36786 34.0743 7.49464 34.693 8.71445C35.3323 9.93427 35.7551 11.2575 35.9613 12.684C36.1057 13.7384 36.0954 14.7412 35.9304 15.6922C35.7861 16.6226 35.518 17.4909 35.1261 18.2972C34.7343 19.1036 34.2393 19.8272 33.6413 20.4681C33.0638 21.109 32.4348 21.6569 31.7543 22.1118H31.878C32.4761 22.9801 32.9504 23.9105 33.301 24.9029C33.6722 25.8746 33.9403 26.9083 34.1053 28.0041C34.1878 28.5416 34.2393 29.0792 34.26 29.6167C34.2806 30.1543 34.2806 30.6815 34.26 31.1984C34.1981 32.5422 33.9815 33.9481 33.6103 35.416C33.2391 36.8633 32.7235 38.1865 32.0636 39.3856C31.4037 40.6054 30.6097 41.6185 29.6816 42.4248C28.7536 43.2311 27.7018 43.655 26.5263 43.6963C25.8664 43.717 25.2683 43.6136 24.7321 43.3862C24.2166 43.1588 23.7628 42.828 23.371 42.3938C22.9792 41.9803 22.6595 41.4738 22.412 40.8742C22.1852 40.2953 22.0202 39.644 21.9171 38.9204C21.7315 37.742 21.7624 36.4808 22.0099 35.1369C22.278 33.7931 22.742 32.5526 23.4019 31.4154C24.0825 30.2577 24.9693 29.2859 26.0623 28.5003C27.1553 27.7146 28.4546 27.2908 29.9601 27.2288H30.0838C29.7332 27.3942 29.3414 27.7457 28.9083 28.2832C28.4958 28.8001 28.1143 29.3893 27.7637 30.0509C27.4337 30.7125 27.1656 31.3948 26.9594 32.0977C26.7738 32.78 26.7222 33.3692 26.8047 33.8654C26.8666 34.403 27.1244 34.6717 27.5781 34.6717C27.7637 34.6717 28.0318 34.5167 28.3824 34.2066C28.733 33.8964 29.1042 33.4726 29.496 32.9351C29.8879 32.3975 30.2488 31.7566 30.5787 31.0123C30.9087 30.268 31.1459 29.4617 31.2902 28.5933C31.4552 27.3735 31.4759 26.2984 31.3521 25.368C31.2902 24.9959 31.1665 24.5721 30.9809 24.0965C30.8159 23.6003 30.6612 23.1765 30.5169 22.825C30.0426 23.0111 29.5682 23.1558 29.0939 23.2592C28.6196 23.3626 28.1452 23.4143 27.6709 23.4143C26.7016 23.4143 25.9695 23.1972 25.4746 22.763C24.9796 22.3082 24.6909 21.812 24.6084 21.2744C24.5671 20.9436 24.5878 20.6232 24.6703 20.313C24.7734 20.0029 24.9487 19.7342 25.1961 19.5067C25.4436 19.2793 25.753 19.1139 26.1242 19.0105C26.516 18.9072 26.9697 18.9072 27.4853 19.0105C28.0009 19.1139 28.4752 19.2793 28.9083 19.5067C29.362 19.7342 29.7848 19.9926 30.1766 20.282C30.5684 19.8479 30.9293 19.3207 31.2593 18.7004C31.5893 18.0595 31.8574 17.3979 32.0636 16.7156C32.2905 16.0334 32.4554 15.3511 32.5586 14.6688C32.6617 13.9659 32.7029 13.3353 32.6823 12.7771C32.5379 11.6193 32.2905 10.5235 31.9399 9.48976C31.5893 8.45602 31.1562 7.59801 30.6406 6.91574C29.9188 7.78408 29.2486 8.81783 28.6299 10.017C28.0318 11.1954 27.4544 12.4773 26.8975 13.8625C26.3407 15.227 25.8148 16.6743 25.3199 18.2042C24.8249 19.7135 24.3506 21.2434 23.8969 22.794C23.3607 24.5514 22.8142 26.2984 22.2574 28.0351C21.7005 29.7718 21.0922 31.4258 20.4322 32.9971C19.7929 34.5684 19.0814 36.0259 18.2978 37.3698C17.5141 38.7137 16.6273 39.8715 15.6374 40.8432C14.6475 41.8149 13.5235 42.5592 12.2655 43.0761C11.0281 43.6136 9.6361 43.8514 8.08937 43.7893C7.2232 43.7687 6.34673 43.5723 5.45994 43.2001C4.57315 42.8486 3.75854 42.3318 3.01611 41.6495C2.27369 40.9672 1.63437 40.1299 1.09817 39.1375C0.561977 38.1451 0.221697 36.9977 0.0773363 35.6951C-0.0257787 34.9302 -0.0257787 34.1135 0.0773363 33.2452C0.180451 32.3768 0.407304 31.6015 0.757895 30.9193C1.00537 30.4644 1.34565 30.1026 1.77873 29.8338C2.21182 29.5444 2.71708 29.3996 3.29452 29.3996C3.58325 29.3996 3.91321 29.4617 4.28443 29.5857C4.65564 29.7098 5.01654 29.8855 5.36714 30.1129C5.53212 29.6374 5.82084 29.2032 6.2333 28.8104C6.64576 28.4176 7.18196 28.2212 7.84189 28.2212C8.41934 28.2212 9.13083 28.521 9.97637 29.1205C9.66703 29.6581 9.4608 30.175 9.35769 30.6712C9.25457 31.1467 9.23395 31.5912 9.29582 32.0047C9.39893 32.6043 9.62578 33.1211 9.97637 33.5553C10.3476 33.9688 10.8013 34.1755 11.3375 34.1755C11.6056 34.1755 11.9252 34.0928 12.2965 33.9274C12.6677 33.7414 13.0286 33.4933 13.3792 33.1831C14.1835 32.4182 14.9362 31.4981 15.6374 30.4231C16.3592 29.348 17.0398 28.1902 17.6791 26.9497C18.339 25.7092 18.9577 24.4273 19.5351 23.1042C20.1126 21.781 20.6694 20.4784 21.2056 19.1966C21.7212 17.9768 22.2677 16.726 22.8451 15.4441C23.4432 14.1416 24.0619 12.8701 24.7012 11.6296C25.3611 10.3891 26.052 9.21065 26.7738 8.09421C27.5162 6.97776 28.2896 5.98537 29.0939 5.11703C28.0009 4.26936 26.7944 3.63877 25.4746 3.22528C24.1547 2.81178 22.907 2.60503 21.7315 2.60503C21.5253 2.60503 21.319 2.60503 21.1128 2.60503C20.9272 2.60503 20.7416 2.61537 20.556 2.63604C19.4217 2.69807 18.3802 3.05988 17.4316 3.72147C16.5036 4.3624 15.7199 5.15838 15.0806 6.10942C14.4413 7.03979 13.9669 8.05286 13.6576 9.14862C13.3689 10.2444 13.2864 11.2575 13.4101 12.1878C13.5338 13.0148 13.8535 13.7178 14.3691 14.2967C14.9053 14.8549 15.6993 15.1547 16.751 15.196C17.5347 15.2167 18.2565 14.9996 18.9164 14.5448C19.597 14.0899 20.2157 13.4593 20.7725 12.653C21.35 11.826 21.8862 10.8543 22.3811 9.73786C22.8761 8.62142 23.3504 7.42227 23.8041 6.14043ZM26.6501 21.3054C26.6913 21.4088 26.7841 21.5122 26.9285 21.6156C27.0935 21.7189 27.3306 21.7706 27.64 21.7706C27.8668 21.7293 28.104 21.6776 28.3515 21.6156C28.6196 21.5329 28.8774 21.3985 29.1248 21.2124C28.8774 21.047 28.6093 20.923 28.3205 20.8403C28.0318 20.7576 27.774 20.7059 27.5472 20.6852C27.2584 20.6438 27.0316 20.6955 26.8666 20.8403C26.7016 20.985 26.6294 21.14 26.6501 21.3054Z" />
        <path d="M43.9896 25.5851C44.0721 25.4404 44.1958 25.3991 44.3608 25.4611C44.5464 25.5231 44.7114 25.6265 44.8557 25.7712C45.0207 25.9159 45.1548 26.0813 45.2579 26.2674C45.361 26.4535 45.3816 26.5982 45.3198 26.7016L42.5975 31.7256C42.3088 32.2631 41.9891 32.811 41.6386 33.3692C41.288 33.9068 40.8961 34.3823 40.463 34.7958C40.0506 35.2093 39.5866 35.5401 39.071 35.7882C38.576 36.0363 38.0398 36.1397 37.4624 36.0983C36.6993 36.0569 36.1219 35.7882 35.7301 35.292C35.3176 34.7958 35.0598 34.1859 34.9567 33.4623C34.8536 32.8007 34.8742 32.0564 35.0186 31.2294C35.1423 30.4024 35.3485 29.5961 35.6373 28.8104C36.5241 25.8539 37.4212 22.8561 38.3286 19.8169C39.236 16.757 40.1434 13.7488 41.0508 10.7923H44.9176L39.3185 28.9035C39.2154 29.379 39.1225 29.8648 39.0401 30.361C38.9782 30.8572 38.9782 31.3017 39.0401 31.6946C39.1019 32.2114 39.236 32.4699 39.4422 32.4699C39.6278 32.4699 39.8547 32.3148 40.1228 32.0047C40.3909 31.6946 40.6693 31.3121 40.958 30.8572C41.2673 30.4024 41.5664 29.9062 41.8551 29.3686C42.1644 28.8311 42.4428 28.3452 42.6903 27.9111L43.9896 25.5851Z" />
        <path d="M50.2809 27.88C49.6828 28.4176 49.0229 28.8931 48.3011 29.3066C47.5999 29.7201 46.8162 30.0096 45.95 30.175H46.2903C46.3934 30.7745 46.5894 31.3121 46.8781 31.7876C47.1668 32.2424 47.5896 32.4699 48.1464 32.4699C48.7238 32.4699 49.3013 32.2941 49.8787 31.9427C50.4562 31.5912 51.0233 31.1053 51.5801 30.4851C52.1369 29.8648 52.6835 29.1412 53.2197 28.3142C53.7765 27.4665 54.323 26.5672 54.8592 25.6161H54.8282C54.8901 25.4921 55.0035 25.4507 55.1685 25.4921C55.3541 25.5334 55.5294 25.6265 55.6944 25.7712C55.8594 25.8953 55.9934 26.0503 56.0966 26.2364C56.1997 26.4225 56.21 26.5879 56.1275 26.7326C55.5707 27.7457 54.9314 28.8104 54.2096 29.9269C53.4878 31.0226 52.7041 32.0357 51.8585 32.9661C51.0336 33.8964 50.1468 34.6614 49.1982 35.261C48.2701 35.8605 47.3112 36.1603 46.3213 36.1603C45.5582 36.1603 44.9395 36.0156 44.4652 35.7262C43.9702 35.4367 43.5784 35.0852 43.2897 34.6717C42.9803 34.2376 42.7638 33.7827 42.6401 33.3072C42.4957 32.811 42.3926 32.3665 42.3307 31.9737C42.2482 31.126 42.2895 30.2577 42.4545 29.3686C42.5988 28.4589 42.8566 27.5803 43.2278 26.7326C43.5784 25.8642 44.0115 25.0476 44.5271 24.2826C45.0426 23.497 45.6201 22.825 46.2594 22.2668C46.8987 21.6879 47.569 21.2331 48.2701 20.9023C48.9919 20.5508 49.7344 20.3751 50.4974 20.3751C51.1986 20.3751 51.8173 20.5508 52.3535 20.9023C52.9103 21.2538 53.2093 21.812 53.2506 22.5769C53.2918 23.1352 53.2197 23.6727 53.034 24.1896C52.8691 24.6858 52.6422 25.1613 52.3535 25.6161C52.0648 26.0503 51.7348 26.4638 51.3636 26.8566C50.9924 27.2288 50.6315 27.5699 50.2809 27.88ZM50.3427 21.9257C49.889 21.9257 49.4456 22.1118 49.0126 22.4839C48.6001 22.8561 48.2186 23.3419 47.868 23.9415C47.5174 24.5204 47.2184 25.1923 46.9709 25.9573C46.7234 26.7016 46.5378 27.4459 46.4141 28.1902C46.8265 27.9834 47.2699 27.694 47.7442 27.3218C48.2392 26.9497 48.6929 26.5155 49.1054 26.0193C49.5384 25.5024 49.889 24.9442 50.1571 24.3446C50.4459 23.7244 50.5902 23.0731 50.5902 22.3909C50.5696 22.2875 50.5284 22.1841 50.4665 22.0807C50.4252 21.9774 50.384 21.9257 50.3427 21.9257Z" />
        <path d="M58.0938 19.6308C58.1969 19.5067 58.3412 19.4654 58.5269 19.5067C58.7331 19.5274 58.9187 19.5998 59.0837 19.7238C59.2487 19.8272 59.3724 19.9719 59.4549 20.158C59.558 20.3234 59.5683 20.4784 59.4858 20.6232L59.0837 21.3985H59.2074C59.3724 21.9153 59.5065 22.3288 59.6096 22.639C59.7333 22.9284 59.8673 23.2179 60.0117 23.5073C60.1354 23.7968 60.2592 24.0965 60.3829 24.4067C60.5067 24.6961 60.6304 25.0269 60.7541 25.3991C60.8779 25.7505 60.9913 26.1537 61.0944 26.6085C61.1975 27.0427 61.2903 27.5492 61.3728 28.1281C61.3934 28.3142 61.4038 28.5416 61.4038 28.8104C61.4244 29.0585 61.4244 29.2963 61.4038 29.5237C61.61 29.2342 61.8059 28.9241 61.9915 28.5933C62.1977 28.2625 62.4143 27.8904 62.6411 27.4769L63.6929 25.5851C63.7754 25.4404 63.8991 25.3991 64.0641 25.4611C64.2497 25.5231 64.4147 25.6265 64.5591 25.7712C64.7241 25.9159 64.8581 26.0813 64.9612 26.2674C65.0643 26.4535 65.085 26.5982 65.0231 26.7016L63.8476 28.8724C63.332 29.8235 62.6515 30.8779 61.8059 32.0357C60.9604 33.1728 59.9602 34.1859 58.8053 35.0749H58.8362C58.7125 35.1783 58.5578 35.2816 58.3722 35.385C58.1866 35.4677 58.0113 35.5608 57.8463 35.6641C57.5576 35.8295 57.2379 35.9329 56.8873 35.9743C56.5574 36.0363 56.2068 36.0673 55.8356 36.0673C55.485 36.0466 55.1653 35.9432 54.8766 35.7572C54.5879 35.5711 54.3404 35.323 54.1342 35.0129C53.9279 34.7028 53.7733 34.3616 53.6701 33.9895C53.567 33.5966 53.5155 33.1935 53.5155 32.78C53.5155 31.8496 53.6701 31.0226 53.9795 30.299C54.2682 29.5547 54.6291 28.9655 55.0622 28.5313C55.4953 28.0971 55.9593 27.8284 56.4542 27.725C56.9492 27.6009 57.3823 27.694 57.7535 28.0041C57.4648 28.1281 57.1864 28.3762 56.9183 28.7484C56.6502 29.0999 56.4439 29.4617 56.2996 29.8338C56.1552 30.206 56.0933 30.5368 56.114 30.8262C56.1552 31.1157 56.3202 31.25 56.6089 31.2294C56.7739 31.188 57.0214 31.0019 57.3513 30.6712C57.6813 30.3197 57.9803 29.8958 58.2484 29.3996C58.3928 29.0482 58.4856 28.676 58.5269 28.2832C58.5681 27.8697 58.5784 27.2495 58.5578 26.4225C58.5578 26.3398 58.5372 26.195 58.4959 25.9883C58.4753 25.7609 58.4444 25.5024 58.4031 25.213C58.3619 24.9235 58.3103 24.6031 58.2484 24.2516C58.1866 23.9001 58.1247 23.5487 58.0628 23.1972L56.1449 26.7016C56.083 26.8256 55.9593 26.867 55.7737 26.8256C55.6087 26.7636 55.4437 26.6706 55.2787 26.5465C55.1138 26.4018 54.9797 26.2467 54.8766 26.0813C54.7528 25.9159 54.7219 25.7815 54.7838 25.6782L58.0938 19.6308Z" />
        <path d="M66.9149 19.6308C67.018 19.5067 67.1624 19.4654 67.348 19.5067C67.5543 19.5274 67.7399 19.5998 67.9048 19.7238C68.0698 19.8272 68.1936 19.9719 68.2761 20.158C68.3792 20.3234 68.3895 20.4784 68.307 20.6232L67.9048 21.3985H68.0286C68.1936 21.9153 68.3276 22.3288 68.4307 22.639C68.5545 22.9284 68.6885 23.2179 68.8329 23.5073C68.9566 23.7968 69.0803 24.0965 69.2041 24.4067C69.3278 24.6961 69.4516 25.0269 69.5753 25.3991C69.699 25.7505 69.8125 26.1537 69.9156 26.6085C70.0187 27.0427 70.1115 27.5492 70.194 28.1281C70.2146 28.3142 70.2249 28.5416 70.2249 28.8104C70.2456 29.0585 70.2456 29.2963 70.2249 29.5237C70.4312 29.2342 70.6271 28.9241 70.8127 28.5933C71.0189 28.2625 71.2355 27.8904 71.4623 27.4769L72.5141 25.5851C72.5966 25.4404 72.7203 25.3991 72.8853 25.4611C73.0709 25.5231 73.2359 25.6265 73.3802 25.7712C73.5452 25.9159 73.6793 26.0813 73.7824 26.2674C73.8855 26.4535 73.9061 26.5982 73.8443 26.7016L72.6688 28.8724C72.1532 29.8235 71.4726 30.8779 70.6271 32.0357C69.7815 33.1728 68.7813 34.1859 67.6264 35.0749H67.6574C67.5336 35.1783 67.379 35.2816 67.1933 35.385C67.0077 35.4677 66.8324 35.5608 66.6675 35.6641C66.3787 35.8295 66.0591 35.9329 65.7085 35.9743C65.3785 36.0363 65.0279 36.0673 64.6567 36.0673C64.3061 36.0466 63.9865 35.9432 63.6978 35.7572C63.409 35.5711 63.1616 35.323 62.9553 35.0129C62.7491 34.7028 62.5944 34.3616 62.4913 33.9895C62.3882 33.5966 62.3366 33.1935 62.3366 32.78C62.3366 31.8496 62.4913 31.0226 62.8006 30.299C63.0894 29.5547 63.4503 28.9655 63.8834 28.5313C64.3164 28.0971 64.7805 27.8284 65.2754 27.725C65.7704 27.6009 66.2034 27.694 66.5747 28.0041C66.2859 28.1281 66.0075 28.3762 65.7394 28.7484C65.4713 29.0999 65.2651 29.4617 65.1207 29.8338C64.9764 30.206 64.9145 30.5368 64.9351 30.8262C64.9764 31.1157 65.1414 31.25 65.4301 31.2294C65.5951 31.188 65.8425 31.0019 66.1725 30.6712C66.5025 30.3197 66.8015 29.8958 67.0696 29.3996C67.214 29.0482 67.3068 28.676 67.348 28.2832C67.3893 27.8697 67.3996 27.2495 67.379 26.4225C67.379 26.3398 67.3583 26.195 67.3171 25.9883C67.2965 25.7609 67.2655 25.5024 67.2243 25.213C67.183 24.9235 67.1315 24.6031 67.0696 24.2516C67.0077 23.9001 66.9459 23.5487 66.884 23.1972L64.9661 26.7016C64.9042 26.8256 64.7805 26.867 64.5948 26.8256C64.4299 26.7636 64.2649 26.6706 64.0999 26.5465C63.9349 26.4018 63.8009 26.2467 63.6978 26.0813C63.574 25.9159 63.5431 25.7815 63.6049 25.6782L66.9149 19.6308Z" />
        <path d="M90.5228 12.1878C90.4815 13.8211 90.1928 15.2891 89.6566 16.5916C89.141 17.8941 88.4914 19.0002 87.7077 19.9099C86.9447 20.8196 86.0992 21.5225 85.1711 22.0187C84.2637 22.4942 83.3872 22.732 82.5417 22.732C81.4899 22.732 80.5619 22.3495 79.7576 21.5846C78.9533 20.8196 78.4377 19.6825 78.2109 18.1732C78.0253 16.5192 78.1799 14.9169 78.6749 13.3663C79.1698 11.795 79.9019 10.3374 80.8712 8.99356C81.8405 7.62902 82.9954 6.39887 84.3359 5.3031C85.697 4.18666 87.1303 3.23561 88.6358 2.44997C90.1413 1.66433 91.6777 1.06476 93.245 0.651259C94.833 0.23776 96.3488 0.0516859 97.7924 0.0930375C99.9166 0.15506 101.824 0.299783 103.515 0.527208C105.206 0.754632 106.691 0.982055 107.97 1.20948L108.805 1.33353C109.3 1.4369 109.774 1.5196 110.228 1.58163C110.682 1.64365 111.094 1.69534 111.465 1.73669C112.167 1.81939 112.878 1.89175 113.6 1.95377C114.342 1.99512 115.064 2.0158 115.765 2.0158C116.755 2.0158 117.776 1.92276 118.828 1.73669C119.88 1.55061 120.993 1.20948 122.169 0.713283C121.468 1.87107 120.581 2.84279 119.508 3.62844C118.457 4.39341 117.353 5.01365 116.198 5.48917C115.044 5.9647 113.92 6.30583 112.827 6.51258C111.734 6.71933 110.816 6.8227 110.073 6.8227C108.836 6.86405 107.588 6.72967 106.33 6.41954C105.093 6.08875 103.866 5.72693 102.649 5.33411C101.721 6.24381 100.886 7.36025 100.143 8.68344C99.401 10.0066 98.7204 11.4539 98.1017 13.0252C97.4831 14.5964 96.9159 16.2504 96.4003 17.9871C95.8848 19.7238 95.3795 21.4605 94.8846 23.1972C94.4308 24.7892 93.9668 26.3708 93.4925 27.9421C93.0182 29.5134 92.5026 31.0226 91.9458 32.4699C91.389 33.9171 90.7806 35.261 90.1206 36.5015C89.4607 37.742 88.708 38.8274 87.8624 39.7578C87.0375 40.7088 86.1095 41.4531 85.0783 41.9906C84.0678 42.5489 82.9232 42.859 81.6446 42.921C80.5103 42.9624 79.4792 42.8486 78.5511 42.5799C77.6231 42.3111 76.6951 41.7839 75.767 40.9982C75.3958 40.6674 75.0246 40.2643 74.6534 39.7888C74.3028 39.3132 73.9625 38.7964 73.6326 38.2381C73.3232 37.7006 73.0551 37.132 72.8283 36.5325C72.6014 35.9329 72.4467 35.3437 72.3642 34.7648C72.2817 34.1859 72.2714 33.6173 72.3333 33.0591C72.3952 32.5009 72.5602 31.953 72.8283 31.4154C73.0551 30.9606 73.3748 30.6091 73.7872 30.361C74.2203 30.1129 74.7153 29.9889 75.2721 29.9889C75.5814 29.9889 75.9114 30.0509 76.262 30.175C76.6126 30.2783 76.9632 30.4437 77.3138 30.6712C77.4994 30.237 77.7984 29.8338 78.2109 29.4617C78.6439 29.0688 79.1389 28.8724 79.6957 28.8724C79.9638 28.8724 80.2628 28.9448 80.5928 29.0895C80.9434 29.2342 81.3146 29.441 81.7065 29.7098C81.5209 30.268 81.3868 30.7952 81.3043 31.2914C81.2424 31.7669 81.2424 32.2011 81.3043 32.5939C81.4074 33.2348 81.6033 33.762 81.8921 34.1755C82.2014 34.5684 82.5623 34.7648 82.9748 34.7648C83.5522 34.7648 84.1812 34.3513 84.8618 33.5243C85.6248 32.6353 86.3157 31.6842 86.9344 30.6712C87.5531 29.6374 88.1202 28.552 88.6358 27.4149C89.172 26.2777 89.6669 25.1096 90.1206 23.9105C90.5743 22.6907 91.0281 21.4605 91.4818 20.22C91.9973 18.8555 92.5232 17.4909 93.0594 16.1264C93.6162 14.7412 94.2246 13.3766 94.8846 12.0328C95.5445 10.6889 96.2869 9.39672 97.1118 8.15623C97.9368 6.89506 98.8957 5.70626 99.9887 4.58982H100.112C99.3288 4.38307 98.5967 4.22801 97.9161 4.12463C97.2356 4.00058 96.5344 3.95923 95.8126 4.00058C95.0908 4.04193 94.2865 4.15564 93.3997 4.34172C92.5129 4.52779 91.6158 4.79656 90.7084 5.14804C89.801 5.47884 88.9142 5.89233 88.048 6.38853C87.2025 6.88473 86.4394 7.46362 85.7589 8.12522C85.0989 8.76614 84.5627 9.5001 84.1503 10.3271C83.7378 11.1334 83.5316 12.0224 83.5316 12.9941C83.676 13.7384 83.9234 14.3484 84.274 14.8239C84.6246 15.2787 85.0268 15.5061 85.4805 15.5061C85.8517 15.5061 86.2435 15.4234 86.656 15.258C87.0684 15.0926 87.4706 14.8652 87.8624 14.5758C88.2543 14.2863 88.6255 13.9349 88.9761 13.5214C89.3267 13.1079 89.6257 12.6634 89.8732 12.1878H90.5228Z" />
        <path d="M104.055 20.127C104.818 20.127 105.406 20.4061 105.818 20.9643C106.251 21.5019 106.519 22.1531 106.622 22.9181C106.664 23.2489 106.674 23.6107 106.653 24.0035C106.633 24.3757 106.602 24.7375 106.56 25.0889C106.519 25.4404 106.395 25.9263 106.189 26.5465C105.983 27.1668 105.766 27.787 105.54 28.4073C105.333 29.0068 105.148 29.565 104.983 30.0819C104.838 30.5781 104.746 30.9503 104.704 31.1984H104.735C104.735 31.4465 104.776 31.6325 104.859 31.7566C104.962 31.86 105.076 31.8496 105.199 31.7256H105.168C105.601 31.25 106.076 30.5781 106.591 29.7098C107.107 28.8414 107.757 27.694 108.54 26.2674L108.85 25.6782C108.932 25.5128 109.066 25.4507 109.252 25.4921C109.437 25.5128 109.613 25.5955 109.778 25.7402C109.943 25.8849 110.077 26.0607 110.18 26.2674C110.283 26.4535 110.293 26.6396 110.211 26.8256L109.375 28.3142C108.695 29.5547 108.076 30.6505 107.519 31.6015C106.963 32.5319 106.437 33.3279 105.942 33.9895C105.447 34.6304 104.952 35.1266 104.457 35.4781C103.962 35.8089 103.426 35.9846 102.848 36.0053C102.065 36.0466 101.415 35.7882 100.899 35.23C100.384 34.6717 100.074 33.9688 99.9713 33.1211C99.9301 32.749 99.9404 32.3562 100.002 31.9427C100.085 31.5292 100.188 31.1053 100.312 30.6712C100.456 30.2163 100.611 29.7718 100.776 29.3376C100.961 28.9035 101.137 28.4796 101.302 28.0661C101.549 27.4666 101.786 26.8566 102.013 26.2364C102.24 25.5955 102.384 24.9546 102.446 24.3136H102.415C102.415 24.1482 102.405 23.9828 102.384 23.8174C102.364 23.652 102.333 23.5693 102.291 23.5693C102.312 23.5693 102.25 23.6934 102.106 23.9415C101.961 24.1689 101.817 24.3963 101.673 24.6238L101.58 24.8098C101.353 25.2233 101.064 25.6988 100.714 26.2364C100.363 26.7739 99.9507 27.2598 99.4764 27.694H99.6001L99.1052 29.2136C98.7133 30.4747 98.3215 31.7256 97.9297 32.9661C97.5584 34.1859 97.2594 35.2196 97.0326 36.0673H93.1348L100.93 10.9783H104.828C104.787 11.1024 104.632 11.5366 104.364 12.2809C104.117 13.0045 103.807 13.9452 103.436 15.103C103.065 16.2401 102.642 17.5426 102.168 19.0105C101.693 20.4578 101.219 21.9567 100.745 23.5073C100.951 23.1558 101.178 22.7837 101.425 22.3909C101.693 21.9774 101.972 21.6052 102.26 21.2744C102.549 20.9436 102.838 20.6749 103.127 20.4681C103.436 20.2407 103.745 20.127 104.055 20.127Z" />
        <path d="M115.292 27.88C114.694 28.4176 114.034 28.8931 113.312 29.3066C112.611 29.7201 111.827 30.0096 110.961 30.175H111.301C111.404 30.7745 111.6 31.3121 111.889 31.7876C112.178 32.2424 112.6 32.4699 113.157 32.4699C113.735 32.4699 114.312 32.2941 114.889 31.9427C115.467 31.5912 116.034 31.1053 116.591 30.4851C117.148 29.8648 117.694 29.1412 118.23 28.3142C118.787 27.4665 119.334 26.5672 119.87 25.6161H119.839C119.901 25.4921 120.014 25.4507 120.179 25.4921C120.365 25.5334 120.54 25.6265 120.705 25.7712C120.87 25.8953 121.004 26.0503 121.107 26.2364C121.21 26.4225 121.221 26.5879 121.138 26.7326C120.581 27.7457 119.942 28.8104 119.22 29.9269C118.499 31.0226 117.715 32.0357 116.869 32.9661C116.044 33.8964 115.158 34.6614 114.209 35.261C113.281 35.8605 112.322 36.1603 111.332 36.1603C110.569 36.1603 109.95 36.0156 109.476 35.7262C108.981 35.4367 108.589 35.0852 108.3 34.6717C107.991 34.2376 107.775 33.7827 107.651 33.3072C107.506 32.811 107.403 32.3665 107.341 31.9737C107.259 31.126 107.3 30.2577 107.465 29.3686C107.61 28.4589 107.867 27.5803 108.239 26.7326C108.589 25.8642 109.022 25.0476 109.538 24.2826C110.053 23.497 110.631 22.825 111.27 22.2668C111.909 21.6879 112.58 21.2331 113.281 20.9023C114.003 20.5508 114.745 20.3751 115.508 20.3751C116.209 20.3751 116.828 20.5508 117.364 20.9023C117.921 21.2538 118.22 21.812 118.261 22.5769C118.303 23.1352 118.23 23.6727 118.045 24.1896C117.88 24.6858 117.653 25.1613 117.364 25.6161C117.076 26.0503 116.746 26.4638 116.374 26.8566C116.003 27.2288 115.642 27.5699 115.292 27.88ZM115.354 21.9257C114.9 21.9257 114.456 22.1118 114.023 22.4839C113.611 22.8561 113.229 23.3419 112.879 23.9415C112.528 24.5204 112.229 25.1923 111.982 25.9573C111.734 26.7016 111.549 27.4459 111.425 28.1902C111.837 27.9834 112.281 27.694 112.755 27.3218C113.25 26.9497 113.704 26.5155 114.116 26.0193C114.549 25.5024 114.9 24.9442 115.168 24.3446C115.457 23.7244 115.601 23.0731 115.601 22.3909C115.58 22.2875 115.539 22.1841 115.477 22.0807C115.436 21.9774 115.395 21.9257 115.354 21.9257Z" />
        <path d="M143.645 6.14043C143.748 8.37332 143.521 10.4511 142.964 12.3739C142.428 14.2967 141.665 15.961 140.675 17.3669C139.685 18.7728 138.52 19.8789 137.18 20.6852C135.839 21.4708 134.437 21.843 132.973 21.8016C131.818 21.781 130.776 21.5329 129.848 21.0573C128.941 20.5611 128.157 19.9099 127.497 19.1036C126.858 18.2973 126.342 17.3772 125.951 16.3435C125.579 15.3097 125.352 14.2346 125.27 13.1182C125.187 11.0921 125.507 9.27267 126.229 7.66003C126.971 6.02672 127.982 4.65184 129.261 3.5354C130.56 2.39828 132.065 1.52994 133.777 0.930368C135.509 0.310123 137.324 0 139.221 0C140.541 0 141.81 0.134387 143.026 0.40316C144.326 0.671933 145.615 1.09577 146.893 1.67466C148.172 2.25356 149.347 2.96684 150.42 3.81451C151.286 3.15292 152.214 2.63604 153.204 2.2639C154.214 1.87107 155.359 1.62298 156.638 1.5196C157.401 1.47825 158.133 1.56095 158.834 1.7677C159.556 1.95377 160.195 2.23288 160.752 2.60503C161.329 2.97718 161.804 3.42169 162.175 3.93856C162.546 4.45543 162.783 5.02399 162.886 5.64424C162.969 6.16111 162.938 6.62629 162.794 7.03979C162.67 7.45329 162.474 7.80476 162.206 8.09421C161.958 8.38365 161.659 8.61108 161.309 8.77648C160.979 8.9212 160.638 8.99356 160.288 8.99356C159.36 8.99356 158.586 8.425 157.968 7.28789C158.277 7.28789 158.525 7.2362 158.71 7.13282C158.896 7.02945 159.04 6.9054 159.143 6.76068C159.246 6.59528 159.308 6.42988 159.329 6.26448C159.37 6.07841 159.38 5.92335 159.36 5.7993C159.277 5.3031 159.03 4.84825 158.617 4.43476C158.226 4.00058 157.627 3.76282 156.823 3.72147C155.916 3.7008 155.05 3.84552 154.225 4.15564C153.42 4.44509 152.688 4.83792 152.028 5.33411H152.121C153.111 6.36786 153.915 7.49464 154.534 8.71445C155.173 9.93427 155.596 11.2575 155.802 12.684C155.947 13.7384 155.936 14.7412 155.771 15.6922C155.627 16.6226 155.359 17.4909 154.967 18.2972C154.575 19.1036 154.08 19.8272 153.482 20.4681C152.905 21.109 152.276 21.6569 151.595 22.1118H151.719C152.317 22.9801 152.791 23.9105 153.142 24.9029C153.513 25.8746 153.781 26.9083 153.946 28.0041C154.029 28.5416 154.08 29.0792 154.101 29.6167C154.122 30.1543 154.122 30.6815 154.101 31.1984C154.039 32.5422 153.822 33.9481 153.451 35.416C153.08 36.8633 152.564 38.1865 151.905 39.3856C151.245 40.6054 150.451 41.6185 149.523 42.4248C148.595 43.2311 147.543 43.655 146.367 43.6963C145.707 43.717 145.109 43.6136 144.573 43.3862C144.058 43.1588 143.604 42.828 143.212 42.3938C142.82 41.9803 142.5 41.4738 142.253 40.8742C142.026 40.2953 141.861 39.644 141.758 38.9204C141.572 37.742 141.603 36.4808 141.851 35.1369C142.119 33.7931 142.583 32.5526 143.243 31.4154C143.923 30.2577 144.81 29.2859 145.903 28.5003C146.996 27.7146 148.296 27.2908 149.801 27.2288H149.925C149.574 27.3942 149.182 27.7457 148.749 28.2832C148.337 28.8001 147.955 29.3893 147.605 30.0509C147.275 30.7125 147.007 31.3948 146.8 32.0977C146.615 32.78 146.563 33.3692 146.646 33.8654C146.708 34.403 146.965 34.6717 147.419 34.6717C147.605 34.6717 147.873 34.5167 148.223 34.2066C148.574 33.8964 148.945 33.4726 149.337 32.9351C149.729 32.3975 150.09 31.7566 150.42 31.0123C150.75 30.268 150.987 29.4617 151.131 28.5933C151.296 27.3735 151.317 26.2984 151.193 25.368C151.131 24.9959 151.007 24.5721 150.822 24.0965C150.657 23.6003 150.502 23.1765 150.358 22.825C149.884 23.0111 149.409 23.1558 148.935 23.2592C148.461 23.3626 147.986 23.4143 147.512 23.4143C146.543 23.4143 145.81 23.1972 145.316 22.763C144.821 22.3082 144.532 21.812 144.449 21.2744C144.408 20.9436 144.429 20.6232 144.511 20.313C144.614 20.0029 144.79 19.7342 145.037 19.5067C145.285 19.2793 145.594 19.1139 145.965 19.0105C146.357 18.9072 146.811 18.9072 147.326 19.0105C147.842 19.1139 148.316 19.2793 148.749 19.5067C149.203 19.7342 149.626 19.9926 150.018 20.282C150.409 19.8479 150.77 19.3207 151.1 18.7004C151.43 18.0595 151.698 17.3979 151.905 16.7156C152.131 16.0334 152.296 15.3511 152.4 14.6688C152.503 13.9659 152.544 13.3353 152.523 12.7771C152.379 11.6193 152.131 10.5235 151.781 9.48976C151.43 8.45602 150.997 7.59801 150.482 6.91574C149.76 7.78408 149.09 8.81783 148.471 10.017C147.873 11.1954 147.295 12.4773 146.738 13.8625C146.182 15.227 145.656 16.6743 145.161 18.2042C144.666 19.7135 144.192 21.2434 143.738 22.794C143.202 24.5514 142.655 26.2984 142.098 28.0351C141.542 29.7718 140.933 31.4258 140.273 32.9971C139.634 34.5684 138.922 36.0259 138.139 37.3698C137.355 38.7137 136.468 39.8715 135.478 40.8432C134.488 41.8149 133.364 42.5592 132.106 43.0761C130.869 43.6136 129.477 43.8514 127.93 43.7893C127.064 43.7687 126.188 43.5723 125.301 43.2001C124.414 42.8486 123.599 42.3318 122.857 41.6495C122.115 40.9672 121.475 40.1299 120.939 39.1375C120.403 38.1451 120.063 36.9977 119.918 35.6951C119.815 34.9302 119.815 34.1135 119.918 33.2452C120.021 32.3768 120.248 31.6015 120.599 30.9193C120.846 30.4644 121.187 30.1026 121.62 29.8338C122.053 29.5444 122.558 29.3996 123.135 29.3996C123.424 29.3996 123.754 29.4617 124.125 29.5857C124.497 29.7098 124.857 29.8855 125.208 30.1129C125.373 29.6374 125.662 29.2032 126.074 28.8104C126.487 28.4176 127.023 28.2212 127.683 28.2212C128.26 28.2212 128.972 28.521 129.817 29.1205C129.508 29.6581 129.302 30.175 129.199 30.6712C129.096 31.1467 129.075 31.5912 129.137 32.0047C129.24 32.6043 129.467 33.1211 129.817 33.5553C130.189 33.9688 130.642 34.1755 131.178 34.1755C131.447 34.1755 131.766 34.0928 132.137 33.9274C132.509 33.7414 132.87 33.4933 133.22 33.1831C134.024 32.4182 134.777 31.4981 135.478 30.4231C136.2 29.348 136.881 28.1902 137.52 26.9497C138.18 25.7092 138.799 24.4273 139.376 23.1042C139.954 21.781 140.51 20.4784 141.047 19.1966C141.562 17.9768 142.109 16.726 142.686 15.4441C143.284 14.1416 143.903 12.8701 144.542 11.6296C145.202 10.3891 145.893 9.21065 146.615 8.09421C147.357 6.97776 148.131 5.98537 148.935 5.11703C147.842 4.26936 146.635 3.63877 145.316 3.22528C143.996 2.81178 142.748 2.60503 141.572 2.60503C141.366 2.60503 141.16 2.60503 140.954 2.60503C140.768 2.60503 140.583 2.61537 140.397 2.63604C139.263 2.69807 138.221 3.05988 137.273 3.72147C136.344 4.3624 135.561 5.15838 134.922 6.10942C134.282 7.03979 133.808 8.05286 133.499 9.14862C133.21 10.2444 133.127 11.2575 133.251 12.1878C133.375 13.0148 133.694 13.7178 134.21 14.2967C134.746 14.8549 135.54 15.1547 136.592 15.196C137.376 15.2167 138.097 14.9996 138.757 14.5448C139.438 14.0899 140.057 13.4593 140.613 12.653C141.191 11.826 141.727 10.8543 142.222 9.73786C142.717 8.62142 143.191 7.42227 143.645 6.14043ZM146.491 21.3054C146.532 21.4088 146.625 21.5122 146.769 21.6156C146.934 21.7189 147.172 21.7706 147.481 21.7706C147.708 21.7293 147.945 21.6776 148.192 21.6156C148.461 21.5329 148.718 21.3985 148.966 21.2124C148.718 21.047 148.45 20.923 148.161 20.8403C147.873 20.7576 147.615 20.7059 147.388 20.6852C147.099 20.6438 146.873 20.6955 146.708 20.8403C146.543 20.985 146.47 21.14 146.491 21.3054Z" />
        <path d="M161.882 19.9099C162.232 19.8065 162.49 19.8169 162.655 19.9409C162.841 20.0649 162.985 20.251 163.088 20.4991C163.15 20.7679 163.129 20.9643 163.026 21.0884C162.923 21.1917 162.758 21.2951 162.531 21.3985C162.449 21.4192 162.356 21.4605 162.253 21.5225C162.17 21.5846 162.109 21.6362 162.067 21.6776C161.593 22.0084 161.15 22.5253 160.737 23.2282C160.345 23.9105 160.005 24.6754 159.716 25.5231C159.448 26.3501 159.252 27.1978 159.128 28.0661C159.025 28.9345 159.025 29.7201 159.128 30.4231C159.211 30.9606 159.366 31.4154 159.593 31.7876C159.84 32.1391 160.18 32.3148 160.613 32.3148C160.778 32.3148 161.005 32.2321 161.294 32.0667C161.583 31.8806 161.871 31.6532 162.16 31.3844C162.469 31.1157 162.738 30.8262 162.964 30.5161C163.191 30.1853 163.325 29.8752 163.367 29.5857H163.397C163.191 29.2343 163.026 28.8621 162.902 28.4693C162.779 28.0765 162.696 27.6836 162.655 27.2908C162.573 26.7119 162.542 26.0917 162.562 25.4301C162.583 24.7685 162.645 24.1172 162.748 23.4763C162.851 22.8354 162.995 22.2461 163.181 21.7086C163.367 21.1504 163.583 20.6852 163.831 20.313C164.284 19.6928 164.769 19.3827 165.284 19.3827C165.779 19.3827 166.192 19.6204 166.522 20.096C166.852 20.5508 167.068 21.1297 167.171 21.8326C167.213 22.0601 167.233 22.2978 167.233 22.5459C167.233 22.7734 167.244 23.0008 167.264 23.2282C167.244 24.1172 167.058 25.0786 166.707 26.1123C166.377 27.1461 166.006 28.1178 165.594 29.0275C166.068 28.9655 166.532 28.6554 166.986 28.0971C167.44 27.5389 167.883 26.929 168.316 26.2674L168.78 25.5231C168.924 25.2957 169.1 25.182 169.306 25.182C169.512 25.182 169.687 25.2543 169.832 25.3991C169.997 25.5438 170.11 25.7402 170.172 25.9883C170.234 26.2157 170.203 26.4535 170.079 26.7016C169.791 27.1771 169.481 27.663 169.151 28.1592C168.821 28.6347 168.46 29.0688 168.069 29.4617C167.677 29.8545 167.254 30.175 166.8 30.4231C166.347 30.6712 165.841 30.7952 165.284 30.7952C165.181 30.7952 165.089 30.7952 165.006 30.7952C164.924 30.7952 164.841 30.7849 164.759 30.7642C164.408 31.5498 163.996 32.2735 163.521 32.9351C163.067 33.5966 162.562 34.1652 162.005 34.6407C161.469 35.1162 160.902 35.4884 160.304 35.7572C159.727 36.0466 159.128 36.1913 158.51 36.1913C157.479 36.1913 156.654 35.9019 156.035 35.323C155.396 34.7234 154.973 33.9378 154.767 32.9661C154.499 31.7876 154.55 30.5058 154.921 29.1205C155.272 27.7353 155.818 26.4121 156.561 25.151C157.283 23.8691 158.118 22.7527 159.067 21.8016C160.015 20.8506 160.954 20.22 161.882 19.9099ZM165.656 22.794C165.429 22.8354 165.233 23.0111 165.068 23.3212C164.903 23.6314 164.779 24.0138 164.697 24.4687C164.614 24.9029 164.563 25.3784 164.542 25.8953C164.542 26.3915 164.573 26.867 164.635 27.3218C164.841 26.867 165.016 26.3915 165.161 25.8953C165.305 25.3784 165.419 24.7892 165.501 24.1276C165.542 23.8795 165.563 23.6727 165.563 23.5073C165.583 23.3212 165.604 23.1765 165.625 23.0731C165.645 22.9491 165.656 22.8561 165.656 22.794Z" />
        <path d="M176.84 32.9971C177.5 32.1908 178.16 31.3017 178.82 30.33C179.501 29.3376 180.13 28.3039 180.707 27.2288L181.635 25.5851C181.718 25.4404 181.841 25.3991 182.006 25.4611C182.192 25.5231 182.357 25.6265 182.501 25.7712C182.666 25.9159 182.8 26.0813 182.903 26.2674C183.006 26.4535 183.027 26.5982 182.965 26.7016L181.357 29.5237C180.655 30.8055 179.82 32.0564 178.851 33.2762C177.882 34.496 176.778 35.6951 175.541 36.8736H175.665C174.984 38.9824 174.221 41.0086 173.376 42.952C172.53 44.8955 171.561 46.6115 170.468 48.1001C169.395 49.5886 168.179 50.7775 166.817 51.6665C165.456 52.5555 163.92 53 162.208 53C161.321 53 160.558 52.7002 159.919 52.1006C159.259 51.5011 158.867 50.7051 158.743 49.7127C158.682 49.1338 158.743 48.6066 158.929 48.1311C159.094 47.6762 159.352 47.2524 159.702 46.8596C160.032 46.4667 160.435 46.0946 160.909 45.7431C161.363 45.4123 161.837 45.0712 162.332 44.7197C162.435 44.637 162.579 44.5543 162.765 44.4716C162.93 44.3889 163.064 44.2959 163.167 44.1925C164.714 43.2001 166.188 42.2077 167.591 41.2153C168.993 40.2436 170.292 39.2616 171.489 38.2692H171.334C171.375 38.1451 171.406 38.0624 171.427 38.0211C171.447 37.9797 171.468 37.9074 171.489 37.804C171.55 37.742 171.571 37.7109 171.55 37.7109H171.581L172.014 36.2844L172.602 34.6097L173.592 31.5085C173.283 32.1081 172.963 32.687 172.633 33.2452C172.324 33.7827 171.994 34.2686 171.643 34.7027C171.293 35.1162 170.921 35.447 170.53 35.6951C170.138 35.9432 169.715 36.0673 169.261 36.0673C168.56 36.0259 168.014 35.7675 167.622 35.292C167.209 34.8165 166.951 34.2272 166.848 33.5243C166.745 32.8627 166.766 32.1908 166.91 31.5085C167.055 30.8262 167.22 30.1543 167.405 29.4927L170.066 20.9023H173.994L171.179 29.9889C171.076 30.237 170.994 30.4954 170.932 30.7642C170.87 31.033 170.818 31.2811 170.777 31.5085C170.756 31.7359 170.756 31.922 170.777 32.0667C170.798 32.1908 170.86 32.2321 170.963 32.1908C171.107 32.1494 171.344 31.8393 171.674 31.2604C172.004 30.6815 172.396 29.9682 172.85 29.1205C173.303 28.3142 173.778 27.4976 174.273 26.6706C174.768 25.8229 175.314 25.1096 175.912 24.5307H175.788L176.964 20.9023H180.707L176.84 32.9971ZM161.837 50.8601C162.579 50.8188 163.322 50.5294 164.064 49.9918C164.786 49.4749 165.498 48.7927 166.199 47.945C166.879 47.118 167.529 46.1773 168.148 45.1229C168.766 44.0685 169.344 42.983 169.88 41.8666C169.014 42.5282 168.075 43.1898 167.065 43.8514C166.034 44.5336 165.003 45.1849 163.971 45.8051C163.559 46.0946 163.136 46.3944 162.703 46.7045C162.27 47.0146 161.889 47.3247 161.559 47.6349C161.208 47.9657 160.94 48.3068 160.754 48.6583C160.548 49.0098 160.466 49.3612 160.507 49.7127C160.548 49.9608 160.651 50.2192 160.816 50.488C160.981 50.7568 161.321 50.8808 161.837 50.8601Z" />
      </svg>
    </StyledLogo>
  );
};
