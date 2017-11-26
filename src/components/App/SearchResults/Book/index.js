import React from 'react';

import {Card, CardTitle, CardText} from 'material-ui/Card';

export default ({ title, author, description }) => {
  return (
    <Card>
        <CardTitle title={title} subtitle={author} />
        <CardText>
          {description}
        </CardText>
      </Card>
  );
}
