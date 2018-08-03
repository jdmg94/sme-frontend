/**
 * @Author: JoseMunoz
 * @Date:   2018-08-01T19:43:31-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-08-02T11:33:54-06:00
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';

const MenuItem = ({
 id,
 image,
 title,
 price,
 active,
 onClick,
 description,
}) => (
  <Card
    color={active ? 'green' : null}
    onClick={(...args) => onClick && onClick(id, ...args)}
    style={{
      marginBottom: '1rem',
    }}
  >
    <Image src={image} />
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Description>{description}</Card.Description>
    </Card.Content>
  {
    price &&
    <Card.Content extra>
      <Card.Meta>
        ${price}
      </Card.Meta>
    </Card.Content>
  }
  </Card>
);

MenuItem.propTypes = {
  id: PropTypes.number,
  active: PropTypes.bool,
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
};

export default MenuItem;
