import React from 'react';
import { Formik, Form } from 'formik';
import Button from '@mui/material/Button';
import {
  TextFieldComponent,
  SelectComponent,
  RatingComponent,
} from 'common/components';
import { Lookup } from 'common/models';
import { formValidation } from './character.validations';
import { Character } from './character.vm';
import * as classes from './character.styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { linkRoutes } from 'core/router';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface Props {
  character: Character
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character } = props;
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={character.image}
        title={character.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="p">
        <span>Id: </span>{character.id}
        </Typography>
        <Typography gutterBottom variant="h5" component="p">
        <span>Name: </span>{character.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="p">
        <span>Status: </span>{character.status}
        </Typography>
        <Typography gutterBottom variant="h5" component="p">
        <span>Species: </span>{character.species}
        </Typography>
        <Typography gutterBottom variant="h5" component="p">
        <span>Location: </span>{character.location}
        </Typography>
        <Typography gutterBottom variant="h5" component="p">
        <span>Gender: </span>{character.gender}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => {navigate(linkRoutes.characterCollection);}}>
          <ArrowBackIcon />
          <span> Go back</span>
        </IconButton>
      </CardActions>
    </Card>
  );
};
