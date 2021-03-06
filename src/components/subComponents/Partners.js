import React from "react";
import { Divider } from "antd";
import { useTranslation } from "react-i18next";
import { PartnersImg } from "../../assets/img/imageList.js";

const Partners = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Divider className="partnersTitle" dashed={true}>
        {t("our-partners")}
      </Divider>
      <div className="partnersWrap">
        <div className="partnersItem">
          <a target="_blank" rel="noreferrer" href="google.com">
            <div className="partners-card">
              <div className="partners-card-inner">
                <div className="partners-card-front">
                  <img src={PartnersImg[0]} alt="Partner" />
                </div>
                <div className="partners-card-back">
                  <h4>Penguin</h4>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="partnersItem">
          <a target="_blank" rel="noreferrer" href="google.com">
            <div className="partners-card">
              <div className="partners-card-inner">
                <div className="partners-card-front">
                  <img src={PartnersImg[1]} alt="Partner" />
                </div>
                <div className="partners-card-back">
                  <h4>Sto Pudov</h4>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="partnersItem">
          <a target="_blank" rel="noreferrer" href="google.com">
            <div className="partners-card">
              <div className="partners-card-inner">
                <div className="partners-card-front">
                  <img src={PartnersImg[2]} alt="Partner" />
                </div>
                <div className="partners-card-back">
                  <h4>CMT</h4>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="partnersItem">
          <a target="_blank" rel="noreferrer" href="google.com">
            <div className="partners-card">
              <div className="partners-card-inner">
                <div className="partners-card-front">
                  <img src={PartnersImg[3]} alt="Partner" />
                </div>
                <div className="partners-card-back">
                  <h4>THE CAPITAL</h4>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="partnersItem">
          <a target="_blank" rel="noreferrer" href="google.com">
            <div className="partners-card">
              <div className="partners-card-inner">
                <div className="partners-card-front">
                  <img src={PartnersImg[4]} alt="Partner" />
                </div>
                <div className="partners-card-back">
                  <h4>OPEN HOUSE</h4>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="partnersItem">
          <a target="_blank" rel="noreferrer" href="google.com">
            <div className="partners-card">
              <div className="partners-card-inner">
                <div className="partners-card-front">
                  <img src={PartnersImg[5]} alt="Partner" />
                </div>
                <div className="partners-card-back">
                  <h4>ATLANTIC HOLDING</h4>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Partners;
