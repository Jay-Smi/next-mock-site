import { Text, Title } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome({
  text,
  gradientText,
  id,
}: {
  text?: string;
  gradientText?: string;
  id: string;
}) {
  return (
    <Title className={classes.title} ta="center" id={id}>
      {text && text.concat(' ')}

      <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
        {gradientText}
      </Text>
    </Title>
  );
}
