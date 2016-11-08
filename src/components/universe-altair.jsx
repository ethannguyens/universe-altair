import React from "react";
import { FormattedMessage } from "react-intl";

import styles from "../styles/universe-altair.css";
import messages from "../lang/default-messages";

export default class UniverseAltair extends React.Component {
  render() {
    return (
      <div className={styles.someStyle}>
        <FormattedMessage {...messages.editMe} />
      </div>
    );
  }
}

UniverseAltair.displayName = "UniverseAltair";

UniverseAltair.propTypes = {};

UniverseAltair.defaultProps = {};
