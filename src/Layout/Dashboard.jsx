import React from 'react'
import { Button, GridColumn, Icon, Label } from 'semantic-ui-react'
import Navi from './Navi'
import Categories from './Categories'
import ProductList from '../Pages/ProductList'
import { Grid } from 'semantic-ui-react'

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <GridColumn width={4}>
             <Categories/>
          </GridColumn>
          <GridColumn width={12}>
             <ProductList/>
          </GridColumn>
        </Grid.Row>
      </Grid>
        
      
{/* <Button as='div' labelPosition='right'>
      <Button color='red'>
        <Icon name='heart' />
        Like
      </Button>
      <Label as='a' basic color='red' pointing='left'>
        2,048
      </Label>
    </Button>
    <Button as='div' labelPosition='right'>
      <Button basic color='blue'>
        <Icon name='fork' />
        Fork
      </Button>
      <Label as='a' basic color='blue' pointing='left'>
        2,048
      </Label>
    </Button> */}

    </div>
  )
}
