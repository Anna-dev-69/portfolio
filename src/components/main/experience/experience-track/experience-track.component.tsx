import experienceList from "../../../../data/experience-list";
import "./experience-track.component.scss";

interface ExperienceTrackProps {
  currentIndex: number;
}

const ExperienceTrack: React.FC<ExperienceTrackProps> = (props) => {
  console.log("props.currentIndex", props.currentIndex);
  return (
    <div className="ExperienceTrack">
      {Array.from({ length: experienceList.length }, (_, i) => i + 1).map(
        (item, index) => (
          <div
            key={item}
            className="ExperienceTrack__circle"
            style={
              props.currentIndex === index
                ? { backgroundColor: "var(--color-text)" }
                : {}
            }
          >
            {item}
          </div>
        )
      )}
    </div>
  );
};

export default ExperienceTrack;
