import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, skills I have, and courses I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title={metadata.description}
      intro="I get asked a lot about the things I use to build software, stay productive. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Frontend">
          <Tool title="ReactJS">
            The crown jewel of web development, it is a must know.
          </Tool>
          <Tool title="NextJS">
            Closely related is NextJS (which this website is built on), where
            server components greatly increase the user experience, and
            serverless approach makes development simplier.
          </Tool>
          <Tool title="NuxtJS/Vue">
            Used it for Global Airlearning project during the ICEA (
            <a href="https://www.intlcea.org">www.intlcea.org</a>) internship.
          </Tool>
          <Tool title="Material UI & Tailwind">
            Styling is also a necessary part of web development.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Backend">
          <Tool title="Express"></Tool>
          <Tool title="Databases">
            NoSQL including MongoDB, Firebase, Supabase. SQL include Postgres. I
            also took Cornell's CS 4320 - Intro to Database Management.
          </Tool>
          <Tool title="GraphQL">
            A great synthesizer of information but requires too much
            boilderplate codes.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Dev Tools">
          <Tool title="Git & GitHub">
            I am very proficient. Worked on separate branches that tracks the
            dev (the main development branch to be merged with main) and created
            Pull Requests to collaborate with other developers on the ICEA web
            dev team.
          </Tool>
          <Tool title="Figma">
            We started using Figma as just a design tool but now it’s become our
            virtual whiteboard for the entire company. Never would have expected
            the collaboration features to be the real hook.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Courses">
          <Tool title="CS 3110 - OCaml Functional Programming">
            Michael Clarkson explains the concepts clearly. Functional
            Programming languages are an alternative to OOP and I do prefer this
            way better due to its simplicity and closeness to how a machine
            would execute. There is also less code to write and more checked.{' '}
            <a href="https://cs3110.github.io/textbook/cover.html">
              [Course Textbook]
            </a>
          </Tool>
          <Tool title="CS 4820 - Algorithms">
            Second semester at Cornell taking THE HARDEST CS core course with a
            touch professor Robert Kleinberg.
          </Tool>
          <Tool title="Math 2940 - Linear Algebra For Engineers">
            It’s not the newest kid on the block but it’s still the fastest. The
            Sublime Text of the application launcher world.
          </Tool>
          <Tool title="CS 2110 - OOP & Data Structures">
            Just like any intro to CS course in every Computer Science
            undergrad. Topics include Java, concurrency, shortest path, DFS
            BFS...
          </Tool>
          <Tool title="CS 2800 - Discrete Structures">
            One of the most challenging course in Cornell's CS.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
