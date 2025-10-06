import { Inter } from "next/font/google";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Internationalparticipants() {
  const [selectedMaxNamaLengkap, setselectedMaxNamaLengkap] = useState("");
  const maxNameChars = 180; // batasan maksimal karakter
  const [selectedMaxProject, setselectedMaxProject] = useState("");
  const maxProjectChars = 160; // batasan maksimal karakter
  const [statusMessage, setStatusMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputNameChange = (e) => {
    const { value } = e.target;
    if (value.length <= maxNameChars) {
      setselectedMaxNamaLengkap(value);
    }
  };

  const handleInputProjectChange = (e) => {
    const { value } = e.target;
    if (value.length <= maxProjectChars) {
      setselectedMaxProject(value);
    }
  };

  useEffect(() => {
    const scriptURL =
      "";

    const form = document.forms["regist-form"];
    var buttonCounter = 0;

    if (form) {
      const handleSubmit = async (e) => {
        e.preventDefault();
        if (buttonCounter === 0) {
          buttonCounter++; // Cegah klik ganda
          setIsLoading(true); // Tampilkan loader
          try {
            const response = await fetch(scriptURL, {
              method: "POST",
              body: new FormData(form),
            });
            if (response.ok) {
              setStatusMessage("Data berhasil dikirim!");
              form.reset(); // Reset form hanya jika pengiriman sukses
              setTimeout(() => {
                window.location.href = "/thankyouindopage"; // Redirect setelah 1 detik
              }, 1000);
            } else {
              setStatusMessage("Terjadi kesalahan saat mengirim data.");
            }
          } catch (error) {
            setStatusMessage("Terjadi kesalahan saat mengirim data.");
          } finally {
            setIsLoading(false); // Sembunyikan loader
            buttonCounter = 0; // Reset counter untuk klik selanjutnya
          }
        }
      };
      form.addEventListener("submit", handleSubmit);
      return () => {
        form.removeEventListener("submit", handleSubmit);
      };
    }
  }, []);

  return (
    <>
      <section className="registration-section">
        <div className="container">
          <div className="content">
            <div className="sub">REGISTRATION FORM</div>
            <h1 className="garis-bawah"></h1>
            <br />
            <br />
            <h4>
              HELLO WSO 2025 PARTICIPANTS, Please consider the following information before filling out the registration form :
            </h4>
            <br />
            <p>
              1. Please fill in the required data correctly and ensure there are no writing errors. Also make sure that the data submitted is final and has not changed.
            </p>
            <p>
              2. After making sure the data is correct, you can click <span className="fw-bold">SUBMIT FORM</span> button once. If the data has been successfully submitted, you will be moved to another page.
            </p>
            <p>
              3. There will be an information email that the registration has been received sent to the team leaders email address, and the file will be validated by our team. Please be patient and wait for a maximum of 3 days after the registration time, the Letter of Acceptance (LOA) will be sent to the team leaders email address.
            </p>
            <br />

            <form name="regist-form">
              <h1>COMPETITION</h1>
              <h1 className="garis-bawah"></h1>
              <div className="user-details">
                <div className="input-box">
                  <label className="form-label" value="Peserta Indonesia">
                    Participant Categories 
                  </label>
                  <input
                    type="text"
                    id="PARTICIPANT_CATEGORY"
                    name="PARTICIPANT_CATEGORY"
                    className="form-control"
                    placeholder="Choose Categories Participant"
                    value="National Participant"
                    readOnly
                  />
                </div>
                <div className="input-box">
                  <label for="COMPETITION_TYPE" className="form-label">
                    Competition Type
                  </label>
                  <select
                    type="text"
                    id="COMPETITION_TYPE"
                    name="COMPETITION_TYPE"
                    className="form-control"
                    placeholder="Choose Category Type "
                    required
                  >
                    <option value="">--Choose Competition Type--</option>
                    <option value="Offline Competition">
                      Offline Competition
                    </option>
                    <option value="Offline Competition + Excursion">
                      Offline Competition + Excursion
                    </option>
                    <option value="Fullpack">
                      Fullpack
                    </option>
                  </select>
                </div>
                <div className="input-box">
                  <label for="COMPETITION_CATEGORY" className="form-label">
                    WSO Competition Category
                  </label>
                  <select
                    type="text"
                    id="COMPETITION_CATEGORY"
                    name="COMPETITION_CATEGORY"
                    className="form-control"
                    placeholder="Choose Competition Category"
                    required
                  >
                    <option value="">--Choose Competition Category--</option>
                    <option value="Mathematic">
                      Mathematic - (For Elementary School, Junior High School, Senior High School & University)
                    </option>
                    <option value="Biology">
                      Biology - (For Senior High School & University)
                    </option>
                    <option value="Chemistry">
                      Chemistry - (For Senior High School & University)
                    </option>
                    <option value="Physics">
                      Physics - (For Senior High School & University)
                    </option>
                    <option value="Astronomy">
                      Astronomy - (For Senior High School & University)
                    </option>
                    <option value="Economy">
                      Economy - (For Senior High School & University)
                    </option>
                    <option value="Business Competition">
                      Bussiness Competition - (For Senior High School & University)
                    </option>
                  </select>
                </div>
              </div>
              <h1>BIODATA</h1>
              <h1 className="garis-bawah"></h1>
              <div className="user-details">
                <div className="input-box">
                  <label htmlFor="FULL_NAME" className="form-label">
                    Name of Leader & Member Team
                  </label>
                  <label>
                    <p>
                    Noted: Input the name of the team leader and team members with the team leaders name at the beginning, with the following format:
                    </p>
                    <h6>Kamal Putra</h6>
                    <h6>Ranu Ramadhan</h6>
                  </label>
                  <textarea
                    type="text"
                    id="FULL_NAME"
                    name="FULL_NAME"
                    className="form-control"
                    placeholder="Input Name of Leader & Member Team"
                    required
                    value={selectedMaxNamaLengkap}
                    onChange={handleInputNameChange}
                  ></textarea>
                  <p>
                    {selectedMaxNamaLengkap.length} / {maxNameChars} character
                  </p>
                </div>
                <div className="input-box">
                  <label for="NISN_NIM" className="form-label">
                    NISN / NIM of Leader & Member Team
                  </label>
                  <label>
                    <p>
                      Notes : Enter the NISN / NIM according to the order of the names of the team leader and members, with the following format:
                    </p>
                    <h6>231700</h6>
                    <h6>241700</h6>
                  </label>
                  <textarea
                    type="text"
                    id="NISN_NIM"
                    name="NISN_NIM"
                    className="form-control"
                    placeholder="Enter NISN / NIM of Team Leader & Members"
                    required
                  ></textarea>
                </div>
                <div className="input-box">
                  <label htmlFor="LEADER_WHATSAPP" className="form-label">
                    Leader WhatsApp Number
                  </label>
                  <label>
                    <p>
                    Please write with phone code, example : (phone code) (your number) +62 8177091xxxx
                    </p>
                  </label>
                  <input
                    type="number"
                    id="LEADER_WHATSAPP"
                    name="LEADER_WHATSAPP"
                    className="form-control"
                    placeholder="Input Leader WhatsApp Number"
                    required
                  />
                </div>
                <div className="input-box">
                  <label for="LEADER_EMAIL" className="form-label">
                    Leader Email Address
                  </label>
                  <label>
                    <p>
                    Notes: Please fill in the email correctly, LOA submissions will be sent via the team leaders email address filled in.
                    </p>
                  </label>
                  <input
                    type="email"
                    id="LEADER_EMAIL"
                    name="LEADER_EMAIL"
                    className="form-control"
                    placeholder="Input Your Leader Email Address"
                    required
                  />
                </div>
              </div>

              {/* DATA SEKOLAH START */}
              {/* DATA SEKOLAH START */}
              <h1>SCHOOL DATA</h1>
              <h1 className="garis-bawah"></h1>
              <div className="user-details">
                <div className="input-box">
                  <label htmlFor="SCHOOL_NAME" className="form-label">
                    Name of School/University
                  </label>
                  <label>
                    <p>
                    Noted: if all members are in the same institution, write only 1 institution.
                    </p>
                    <p>If the members are not in the same institution, enter the name of the school with the format in the order of the name of the team leader and team members from each school, with the following format:</p>
                    <h6>SMA CERIA</h6>
                    <h6>HAPPY SENIOR HIGH SCHOOL</h6>
                  </label>
                  <textarea
                    type="text"
                    id="SCHOOL_NAME"
                    name="SCHOOL_NAME"
                    className="form-control"
                    placeholder="Input School Name of Leader & Member Team"
                    required
                  ></textarea>
                </div>  
                <div className="input-box">
                  <label for="NPSN" className="form-label">
                    Nomor Pokok Sekolah Nasional (NPSN)
                  </label>
                  <label>
                    <p>
                      Enter the NPSN if you are still attending school according to the order of the names of the team leader and members, in the following format:
                    </p>
                    <h6>1201301</h6>
                    <h6>1302402</h6>
                  </label>
                  <textarea
                    type="number"
                    id="NPSN"
                    name="NPSN"
                    className="form-control"
                    placeholder="Enter NPSN"
                  ></textarea>
                </div>
                <div className="input-box">
                  <label for="GRADE" className="form-label">
                    Grade{" "}
                  </label>
                  <select
                    type="text"
                    id="GRADE"
                    name="GRADE"
                    className="form-control"
                    placeholder="Pilih Jenjang Pendidikan"
                    required
                  >
                    <option value="">--Choose Your Grade--</option>
                    <option value="Elementary School">
                      Elementary School
                    </option>
                    <option value="Junior High School">
                      Junior High School
                    </option>
                    <option value="Senior High School">
                      Senior High School
                    </option>
                    <option value="University">
                    University
                    </option>
                  </select>
                </div>
                <div className="input-box">
                  <label for="PROVINCE" className="form-label">
                    Province
                  </label>
                  <input
                    type="text"
                    id="PROVINCE"
                    name="PROVINCE"
                    className="form-control"
                    placeholder="Enter Your Province"
                    required
                  />
                </div>
              </div>
              {/* DATA SEKOLAH END */}
              {/* DATA SEKOLAH END */}

              {/* DATA PEMBIMBING START */}
              {/* DATA PEMBIMBING START */}
              <h1>SUPERVISOR DATA</h1>
              <h1 className="garis-bawah"></h1>
              <div className="user-details">
                <div className="input-box">
                  <label for="SUPERVISOR_NAME" className="form-label">
                    Name of Teacher/Supervisor
                  </label>
                  <textarea
                    type="text"
                    id="SUPERVISOR_NAME"
                    name="SUPERVISOR_NAME"
                    className="form-control"
                    placeholder="Input Name of Teacher/Supervisor"
                    required
                  ></textarea>
                </div>

                <div className="input-box">
                  <label
                    for="SUPERVISOR_WHATSAPP_NUMBER"
                    className="form-label"
                  >
                    Teacher/Supervisor WhatsApp Number
                  </label>
                  <label>
                    <p>
                    Please write with phone code, example : (phone code) (your number) +62 8177091xxxx
                    </p>
                  </label>
                  <input
                    type="number"
                    id="SUPERVISOR_WHATSAPP_NUMBER"
                    name="SUPERVISOR_WHATSAPP_NUMBER"
                    className="form-control"
                    placeholder="Input Teacher/Supervisor WhatsApp Number"
                    required
                  />
                </div>

                <div className="input-box">
                  <label for="SUPERVISOR_EMAIL" className="form-label">
                    Teacher/Supervisor Email Address
                  </label>
                  <input
                    type="email"
                    id="SUPERVISOR_EMAIL"
                    name="SUPERVISOR_EMAIL"
                    className="form-control"
                    placeholder="Input Teacher/Supervisor Email Address"
                    required
                  />
                </div>
              </div>
              {/* DATA PEMBIMBING END */}
              {/* DATA PEMBIMBING END */}


              {/* GENERAL INFORMATION START */}
              {/* GENERAL INFORMATION START */}
              <div className="">
                <h1>GENERAL INFORMATION</h1>
                <h1 className="garis-bawah"></h1>
              </div>
              <div className="user-details">
                <div className="input-box">
                  <label for="COMPLETE_ADDRESS" className="form-label">
                    Complete Address
                  </label>
                  <label>
                    <p>
                      Please write the complete address (Street Name, House Number, RT & RW, District, Regency, City, Province, Postal Code)
                    </p>
                  </label>
                  <textarea
                    type="text"
                    id="COMPLETE_ADDRESS"
                    name="COMPLETE_ADDRESS"
                    className="form-control"
                    placeholder="Enter Your Complete Address"
                    required
                  ></textarea>
                </div>
                <div className="input-box">
                  <label for="INFORMATION_RESOURCES" className="form-label">
                    WSO 2025 Competition Information Resources
                  </label>
                  <select
                    type="text"
                    id="INFORMATION_RESOURCES"
                    name="INFORMATION_RESOURCES"
                    className="form-control"
                    placeholder="--Choose Information Resources-- "
                    required
                  >
                    <option value="">--Select the Source of Information--</option>
                    <option value="IYSA Instagram">IYSA Instagram</option>
                    <option value="WSO Instagram">WSO Instagram</option>
                    <option value="Supervisor/School">
                      Supervisor/School
                    </option>
                    <option value="IYSA FaceBook">IYSA FaceBook</option>
                    <option value="IYSA Linkedin">IYSA Linkedin</option>
                    <option value="IYSA Website">IYSA Website</option>
                    <option value="WSO Website">WSO Website</option>
                    <option value="IYSA Email">IYSA Email</option>
                    <option value="WSO Email">WSO Email</option>
                    <option value="Previous Event">Previous Event</option>
                    <option value="Etc">Etc</option>
                  </select>
                </div>
              </div>
              {/* GENERAL INFORMATION END */}
              {/* GENERAL INFORMATION END */}

              <div className="button">
                <input type="submit" value="Close Registration" />
              </div>
            </form>

            {/* Loader dan Status Message */}
            {isLoading && (
              <div className="overlay-loader">
                <div className="loader"></div>
                <div>
                  {statusMessage && (
                    <p className="status-message">{statusMessage}</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
