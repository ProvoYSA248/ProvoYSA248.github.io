import React from "react";
import axios from "axios";
import csvtojson from "csvtojson";
import LoadingScreen from "react-loading-screen";
import groupBy from "lodash/groupBy";
import sortBy from "lodash/sortBy";
import { Dictionary } from "lodash";

axios.defaults.baseURL = "https://provoysa248-cors.herokuapp.com";

const apartmentsCsvUrl =
  "docs.google.com/spreadsheets/d/e/2PACX-1vS_qHpeOyUG7VRBPKZsUdcIBvjze0fRonheEYaIib2-ljaCce-YM3og9XQk7o3-w5DMHkTNL0TjX0fh/pub?gid=1847684935&single=true&output=csv";

const callingsToKnowCsvUrl =
  "docs.google.com/spreadsheets/d/e/2PACX-1vS_qHpeOyUG7VRBPKZsUdcIBvjze0fRonheEYaIib2-ljaCce-YM3og9XQk7o3-w5DMHkTNL0TjX0fh/pub?gid=1341874055&single=true&output=csv";

const fheGroupsCsvUrl =
  "docs.google.com/spreadsheets/d/e/2PACX-1vS_qHpeOyUG7VRBPKZsUdcIBvjze0fRonheEYaIib2-ljaCce-YM3og9XQk7o3-w5DMHkTNL0TjX0fh/pub?gid=1483231470&single=true&output=csv";

const leadersCsvUrl =
  "docs.google.com/spreadsheets/d/e/2PACX-1vS_qHpeOyUG7VRBPKZsUdcIBvjze0fRonheEYaIib2-ljaCce-YM3og9XQk7o3-w5DMHkTNL0TjX0fh/pub?gid=827977769&single=true&output=csv";

const membersCsvUrl =
  "docs.google.com/spreadsheets/d/e/2PACX-1vS_qHpeOyUG7VRBPKZsUdcIBvjze0fRonheEYaIib2-ljaCce-YM3og9XQk7o3-w5DMHkTNL0TjX0fh/pub?gid=708295423&single=true&output=csv";

type Apartment = {
  Number: string;
  "FHE Group": string;
  "Occupants' Gender": "Male" | "Female";
};

type Calling = {
  "Calling(s)": string;
  Member: string;
  "2nd Member": string;
};

type FHEGroup = {
  Number: string;
  "Male Group Leader": string;
  "Female Group Leader": string;
};

type Leader = {
  Calling: string;
  "Couple's Name": string;
  "Address 1": string;
  "Address 2": string;
  "Phone Number": string;
  Email: string;
  "Spouse Phone Number": string;
  "Couple's Photo URL": string;
};

type Member = {
  Name: string;
  Apartment: string;
  "Phone Number": string;
  "Photo URL": string;
};

const getCsv = (url: string, completion: (csv: any[]) => void) =>
  axios
    .get(url)
    .then((response) => {
      csvtojson().fromString(response.data).then(completion);
    })
    .catch((error) => console.log(error));

const PageBreak = () => <p className="pageBreak" />;

const Title = (props: { children: React.ReactNode }) => (
  <h1 className="title">{props.children}</h1>
);

const Entry = ({ name, value }: { name: string; value: string }) => (
  <div className="entry">
    <div className="entryKeyOrValue">{name}</div>
    <div className="entryKeyOrValue">{value}</div>
  </div>
);

const academicSeason = () => {
  const month = new Date().getMonth();
  if (month < 4) {
    return "Winter";
  } else if (month < 8) {
    return "Summer";
  } else {
    return "Fall";
  }
};

const year = () => new Date().getFullYear();

const FrontPage = () => (
  <>
    <h1 className="frontTitle">
      Provo YSA 248th
      <br />
      Ward Directory
      <br />
      {`${academicSeason()} ${year()}`}
    </h1>
    <img
      className="frontImage"
      src="Photos/Provo City Center Temple.JPG"
      alt="Provo City Center Temple"
    />
    <PageBreak />
  </>
);

const FHEGroupsPage = ({
  fheGroups,
  fheGroupApartments,
}: {
  fheGroups: FHEGroup[];
  fheGroupApartments: Dictionary<Apartment[]>;
}) => (
  <>
    <Title>FHE Groups</Title>
    <div className="fheGroupsGrid">
      {fheGroups.map((group) => (
        <div>
          <h2 className="subtitle">{`Group ${group.Number}`}</h2>
          <div className="subtitleNote">{`${group["Female Group Leader"]} & ${group["Male Group Leader"]}`}</div>
          <div className="centeredEntry">
            {fheGroupApartments[group.Number]
              .map((apartment) => apartment.Number)
              .join(" & ")}
          </div>
        </div>
      ))}
    </div>
    <PageBreak />
  </>
);

const ApartmentPage = ({
  number,
  members,
}: {
  number: string;
  members: Member[];
}) => (
  <>
    <h2>{`Apartment ${number}`}</h2>
    <div className="grid">
      {members.map((member) => (
        <div className="gridItem">
          <div className="gridItemColumn">
            <img
              className="memberImage"
              src={member["Photo URL"]}
              alt={member["Photo URL"]}
            />
            <div>{member.Name}</div>
            <div>{member["Phone Number"]}</div>
          </div>
        </div>
      ))}
    </div>
    <PageBreak />
  </>
);

const LeaderItem = ({ leader }: { leader: Leader }) => (
  <div className="gridItemColumn">
    <img
      className="memberImage"
      src={leader["Couple's Photo URL"]}
      alt={leader["Couple's Photo URL"]}
    />
    <div style={{ fontWeight: "bold" }}>{leader.Calling}</div>
    <div>{leader["Couple's Name"]}</div>
    <div>{leader["Address 1"]}</div>
    <div>{leader["Address 2"]}</div>
    <div>{leader["Phone Number"]}</div>
    <div>{leader["Email"]}</div>
    <div>{leader["Spouse Phone Number"]}</div>
  </div>
);

const LeaderPages = (props: { leaders: Leader[] }) => {
  const leaders = groupBy(props.leaders, "Calling");
  return (
    <>
      <div className="leaderColumn">
        <div className="leaderRow">
          <LeaderItem leader={leaders["Bishop"][0]} />
        </div>
        <div className="leaderRow">
          <LeaderItem leader={leaders["1st Counselor"][0]} />
          <LeaderItem leader={leaders["2nd Counselor"][0]} />
        </div>
      </div>
      <PageBreak />
      <div className="leaderColumn">
        <div className="leaderRow">
          <LeaderItem leader={leaders["Ward Clerk"][0]} />
        </div>
        <div className="leaderRow">
          <LeaderItem leader={leaders["High Counselor"][0]} />
        </div>
      </div>
    </>
  );
};

const EXECUTIVE_SECRETARY = "Executive Secretary";

const CallingsToKnow = ({
  callings,
  members,
}: {
  callings: Calling[];
  members: Member[];
}) => {
  const executiveSecretary = members.find(
    (member) =>
      member.Name ===
      callings.find((calling) => calling["Calling(s)"] === EXECUTIVE_SECRETARY)
        ?.Member
  );
  return (
    <>
      <Title>Some Callings to Know</Title>
      {callings
        .filter((calling) => calling["Calling(s)"] !== EXECUTIVE_SECRETARY)
        .map((calling) => (
          <Entry
            name={calling["Calling(s)"]}
            value={[calling.Member, calling["2nd Member"]]
              .filter((member) => member)
              .join(" & ")}
          />
        ))}
      {executiveSecretary && (
        <>
          <br />
          <h1 style={{ fontSize: "35px", fontStyle: "italic" }}>
            For an appointment with the Bishop
            <br />
            Please contact:
          </h1>
          <Entry
            name={EXECUTIVE_SECRETARY}
            value={`${executiveSecretary.Name} ~ ${executiveSecretary["Phone Number"]}`}
          />
        </>
      )}
      <PageBreak />
    </>
  );
};

function App() {
  const [apartments, setApartments] = React.useState<Apartment[]>();
  const [callings, setCallings] = React.useState<Calling[]>();
  const [fheGroups, setFHEGroups] = React.useState<FHEGroup[]>();
  const [leaders, setLeaders] = React.useState<Leader[]>();
  const [members, setMembers] = React.useState<Member[]>();

  React.useEffect(() => {
    getCsv(apartmentsCsvUrl, setApartments);
    getCsv(callingsToKnowCsvUrl, setCallings);
    getCsv(fheGroupsCsvUrl, setFHEGroups);
    getCsv(leadersCsvUrl, setLeaders);
    getCsv(membersCsvUrl, setMembers);
  }, []);

  if (
    apartments === undefined ||
    callings === undefined ||
    fheGroupsCsvUrl === undefined ||
    leaders === undefined ||
    members === undefined
  ) {
    return (
      <LoadingScreen
        loading={true}
        bgColor="#f1f1f1"
        spinnerColor="#9ee5f8"
        textColor="#676767"
        text="Loading..."
      />
    );
  }

  const sortedApartments = sortBy(apartments, "Occupants' Gender", "Number");
  const apartmentMembers = groupBy(members, "Apartment");
  const sortedFHEGroups = sortBy(fheGroups, "Number");
  const fheGroupApartments = groupBy(sortBy(apartments, "Number"), "FHE Group");

  return (
    <main>
      <FrontPage />
      <FHEGroupsPage
        fheGroups={sortedFHEGroups}
        fheGroupApartments={fheGroupApartments}
      />
      {sortedApartments.map((apartment) => (
        <ApartmentPage
          key={apartment.Number}
          number={apartment.Number}
          members={apartmentMembers[apartment.Number] ?? []}
        />
      ))}
      <LeaderPages leaders={leaders} />
      <CallingsToKnow callings={callings} members={members} />
    </main>
  );
}

export default App;
