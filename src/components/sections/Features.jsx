import SmartOrganization from "../../assets/graphics/SmartOrganization.webp";
import ContextualReminder from "../../assets/graphics/ContextualReminders.webp";

const Features = () => {
  return (
    <section className="bg-primary-1500 overflow-hidden bg-[url('../src/assets/Noise.webp')] bg-repeat">
      <div>
        <div />
        <h2>
          All The Tools You Need To <br />
          <span>Supercharge</span> Your Note Taking
        </h2>

        <div>
          <figure>
            <img src={SmartOrganization} alt="Smart Organization" />
          </figure>
          <div>
            <p>Smart Organization</p>
            <p>
              Autometically organize your notes into folders and subfolders
              based on key topics and themes. Noteflow will automatically
              categorize and tag your notes, making it easier to find exactly
              what you need.
            </p>
          </div>
        </div>

        <div>
          <div>
            <p>Constextual Reminder</p>
            <p>
              Stay on top of your notes with contextual reminders. Noteflow will
              send you reminders based on the context of your notes, ensuring
              you never miss an important deadline or task and send timely
              alerts to ensure nothing slips through the cracks.
            </p>
          </div>
          <figure>
            <img src={ContextualReminder} alt="Constextual Reminder" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Features;
