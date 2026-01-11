import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { MdLocationOn } from "react-icons/md";
const Section03 = () => {
  const { t } = useLanguage();

  return (
    <section className="section" id="o3">
      <div className="sectionHead">
        <div>
          <h2>{t.section03.title}</h2>
          <p>{t.section03.description}</p>
        </div>
      </div>

      <div className="box">
        <div className="cols2">
          {/* Left Side */}
          <div className="col">
            <h4 style={{ margin: '0 0 10px', fontWeight: 900 }}>{t.section03.shirasiRoad}</h4>
            <ul className="list">
              <li>
                <b>{t.section03.fourWheeler}</b>
                <ul className="list">
                  <li>
                    <a
                      href="https://maps.app.goo.gl/YozcWoHLvA8zgFTSA"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <MdLocationOn className="mapIcon" /> {t.section03.apmcPremises}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://maps.app.goo.gl/m7HqJwuWCTZgZugD7"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <MdLocationOn className="mapIcon" /> {t.section03.forestParkFront}
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <b>{t.section03.twoWheeler}</b>
                <ul className="list">
                  <li>
                    <a
                      href="https://maps.app.goo.gl/HdjNL4r4uWb8sNKM7"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <MdLocationOn className="mapIcon" /> {t.section03.carStand}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://maps.app.goo.gl/pg2etNLgL1T5DNU16"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <MdLocationOn className="mapIcon" /> {t.section03.tractorStand}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://maps.app.goo.gl/a79ZhnubCK48caTp7"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <MdLocationOn className="mapIcon" /> {t.section03.juniorPUGround}
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <h4 style={{ margin: '12px 0 10px', fontWeight: 900 }}>{t.section03.mundagodRoad}</h4>
            <ul className="list">
              <li>
                <b>{t.section03.bothWheeler}</b>
                <a
                  href="https://maps.app.goo.gl/rkjFSk7GTGurjPMY9"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <MdLocationOn className="mapIcon" /> {t.section03.tmsGround}
                </a>
              </li>
            </ul>
          </div>

          {/* Right Side */}
          <div className="col right">
            <h4 style={{ margin: '0 0 10px', fontWeight: 900 }}>{t.section03.karwarRoad}</h4>
            <ul className="list">
              <li>
                <b>{t.section03.fourWheeler}</b>
                <a
                  href="https://maps.app.goo.gl/tozLE1pcELxcM9Df8"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <MdLocationOn className="mapIcon" /> {t.section03.venkatramanMath}
                </a>
              </li>
              <li>
                <b>{t.section03.twoWheeler}</b>
                <ul className="list">
                  <li>
                    <a
                      href="https://maps.app.goo.gl/UVvaEZrqnWnJSHMZ7"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <MdLocationOn className="mapIcon" /> {t.section03.urduSchool}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://maps.app.goo.gl/5AEP2fnkHCDevHDj6"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <MdLocationOn className="mapIcon" /> {t.section03.fieldEducationOffice}
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <h4 style={{ margin: '12px 0 10px', fontWeight: 900 }}>{t.section03.hubballiRoad}</h4>
            <ul className="list">
              <li>
                <b>{t.section03.fourWheeler}</b>
                <ul className="list">
                  <li>
                    <a
                      href="https://maps.app.goo.gl/gDQbNvKZJiEoDBLn9"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <MdLocationOn className="mapIcon" /> {t.section03.motherTheresaSchool}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://maps.app.goo.gl/EaPrDDRJmVGQDNGXA"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <MdLocationOn className="mapIcon" /> {t.section03.shivuKavaleLand}
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <b>{t.section03.twoWheeler}</b>
                <a
                  href="https://maps.app.goo.gl/nBAV2n6AgLiQdxueA"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <MdLocationOn className="mapIcon" /> {t.section03.pwdibPark}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Special Parking */}
        <div className="specialParking">
          <h3>{t.section03.specialParking}</h3>
          <div className="specialGrid">
            <div className="specialItem">
              <div className="spTitle">{t.section03.disabledParking}</div>
              <a
                href="https://maps.app.goo.gl/YfTXmHBHjVqYJ6Aw9"
                rel="noopener noreferrer"
                target="_blank"
              >
                <MdLocationOn className="mapIcon" /> {t.section03.oldTahsildar}
              </a>
            </div>
            <div className="specialItem">
              <div className="spTitle">{t.section03.policeParking}</div>
              <a
                href="https://maps.app.goo.gl/tZXScJcrrLuNkk248"
                rel="noopener noreferrer"
                target="_blank"
              >
                <MdLocationOn className="mapIcon" /> {t.section03.newTahsildar}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section03;
