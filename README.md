# Devtools CTF

Get familiar with your browser by solving CTF only with your devtools

** Supports all common browsers

**Fuck IE don't even try!

# Development

Here is a quick guide to develop more levels

## Creating A new Level

### Create a new Page

Create a new `.hbs` file in `pages` (e.g. `my-level.hbs`)
**\*use `!` + `Tab` to generate basic HTML structure, or copy-paste another `.hbs` file**

example for body content in a level:

```handlebars
<div>
  the flag is {{flag}}
</div>
```

`{{flag}}` serves as a placeholder for data injection from the server

### Create Level Configuration

add to `config.ts` the following:

```typescript
export default {
  levels: {
    /* {... Other levels}*/
    myLevel: createLevelConfig('MY_LEVEL', {
      url: 'level-123456',
      flag: createFlag('myFl4G')
    })
  }
}
```

NOTE: don't copy-paste like an idiot, you might delete other levels by accident.  

### Create a new Controller

```bash
$   nest g co myLevel controllers --flat
```

This command will create a new `my-level.controller.ts` file inside `controllers/` directory. `--flat` means it will not
create a `my-level/` directory too.

To create a route that displays content, add `@Get()` to specify your request method, and `@Render` to specify which page you want to render

```typescript
import config from '~/config';

const levelConfig = config.levels.myLevel

@Controller(levelConfig.url)
export class MyLevelController {
  @Get()
  @Render('my-level.hbs')
  render() {
    //this defines the variables for my-level.hbs
    return {
      flag: levelConfig.flag,
    };
  }
}
```

to add more routes just learn `nestjs`, and put them inside the relevant controller.

