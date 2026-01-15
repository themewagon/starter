import Image from 'next/image';

import { Section } from '@/layout/Section';

const Sponsors = () => (
  <Section
    title="Sponsors"
    description="Our sponsors' exceptional support has made this project possible."
  >
    <table className="mx-auto border-collapse">
      <tbody>
        <tr className="h-56">
          <td className="border-2 border-gray-300 p-3">
            <a href="#!">
              <Image
                src="/assets/images/clerk-logo-dark.png"
                alt="Clerk – Authentication & User Management for Next.js"
                width={260}
                height={224}
              />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <a href="#!">
              <Image
                src="/assets/images/coderabbit-logo-light.svg"
                alt="CodeRabbit"
                width={260}
                height={224}
              />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <a href="#!">
              <Image
                src="/assets/images/sentry-dark.png"
                alt="Sentry"
                width={260}
                height={224}
              />
            </a>
          </td>
        </tr>
        <tr className="h-56">
          <td className="border-2 border-gray-300 p-3">
            <a href="#!">
              <Image
                src="/assets/images/arcjet-light.svg"
                alt="Arcjet"
                width={260}
                height={224}
              />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <a href="#!">
              <Image
                src="/assets/images/crowdin-dark.png"
                alt="Better Stack"
                width={260}
                height={224}
              />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <a href="#!">
              <Image
                src="/assets/images/nextjs-boilerplate-saas.png"
                alt="Next.js Boilerplate SaaS"
                width={260}
                height={224}
              />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </Section>
);

export { Sponsors };
