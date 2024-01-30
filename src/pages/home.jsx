import React from 'react'
import { Grid } from 'semantic-ui-react'

export default function Home() {
  return (
    <div className='mt-[200px]'>
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column>
            <img src=".\images\home1.png" alt="" />
          </Grid.Column>
          <Grid.Column className='mt-5'>
            <h1 className=''>Master the English language! <br /> It's enjoyable and comes at no cost.</h1>
            <p className='fs-3'>Polyngo assists you in enhancing your English proficiency independently using brief video segments.
              The process of mastering and refining your English has become even more
              delightful within the Polyngo video learning setting.</p>
          </Grid.Column>

        </Grid.Row>
      </Grid>


    </div>
  )
}
