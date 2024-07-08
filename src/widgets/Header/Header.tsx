import { Autocomplete, Burger, Group, rem, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconSearch } from '@tabler/icons-react'
import { Link } from 'atomic-router-react'

import { routes } from '@/shared/routing/index'

import classes from './header.module.css'

export const Header = () => {
  const [opened, { toggle }] = useDisclosure(false)

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
          <Text size="lg" component={Link} to={routes.home}>
            MovieMania
          </Text>
        </Group>

        <Group>
          <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
            <Text component={Link} to={routes.movies} className={classes.link}>
              Movies
            </Text>
          </Group>
          <Autocomplete
            className={classes.search}
            placeholder="Search"
            leftSection={
              <IconSearch
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
              />
            }
            data={[
              'React',
              'Angular',
              'Vue',
              'Next.js',
              'Riot.js',
              'Svelte',
              'Blitz.js',
            ]}
            visibleFrom="xs"
          />
        </Group>
      </div>
    </header>
  )
}
