import React from 'react'
import { Divider, Type } from 'react-spark'

class Typography extends React.Component {
  bodyText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida urna quis nulla ultrices, sed efficitur risus elementum. Vivamus semper ex a lorem sodales, rhoncus rhoncus augue cursus. Sed vestibulum felis vel euismod aliquet. Suspendisse sit amet euismod nibh, eget fermentum arcu. Aliquam lacinia, sem eu ultricies auctor, velit nunc commodo sapien, pharetra maximus augue dui eget dui.'

  displayText = 'A Quick Brown Fox Jumps Over the Lazy Dog'

  render = () => (<>
    <h1>Typography</h1>

    <Divider />

    <h2>Body</h2>

    <p>Body One:</p>
    <Type.BodyOne className='extra-class' data-extra-attribute>
      {this.bodyText}
    </Type.BodyOne>

    <Divider />

    <p>Body Two:</p>
    <Type.BodyTwo>{this.bodyText}</Type.BodyTwo>

    <Divider />

    <p>Body Three:</p>
    <Type.BodyThree>{this.bodyText}</Type.BodyThree>

    <Divider />

    <p>Body Four:</p>
    <Type.BodyFour>{this.bodyText}</Type.BodyFour>

    <Divider />

    <h2>Display</h2>

    <p>Display One:</p>
    <Type.DisplayOne className='extra-class' data-extra-attribute>
      {this.displayText}
    </Type.DisplayOne>

    <Divider />

    <p>Display Two:</p>
    <Type.DisplayTwo>{this.displayText}</Type.DisplayTwo>

    <Divider />

    <p>Display Three:</p>
    <Type.DisplayThree>{this.displayText}</Type.DisplayThree>

    <Divider />

    <p>Display Four:</p>
    <Type.DisplayFour>{this.displayText}</Type.DisplayFour>

    <Divider />

    <p>Display Five:</p>
    <Type.DisplayFive>{this.displayText}</Type.DisplayFive>

    <Divider />

    <p>Display Six:</p>
    <Type.DisplaySix>{this.displayText}</Type.DisplaySix>

    <Divider />

    <p>Display Seven:</p>
    <Type.DisplaySeven>{this.displayText}</Type.DisplaySeven>

    <Divider />

    <p>Display Eight:</p>
    <Type.DisplayEight>{this.displayText}</Type.DisplayEight>
  </>)
}

export default Typography
