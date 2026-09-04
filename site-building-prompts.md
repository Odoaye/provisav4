# Site Building Prompts — Provisa Writers Standalone

This file is the working history and handoff brief for the standalone Provisa Writers Template 2 website. It is written so a future builder can understand what has already been decided without recreating earlier work.

## Project identity

- Product: standalone Provisa Writers website based on Template 2.
- Visual direction: editorial field notes, warm paper, deep teal, coral accent, Fraunces display type, Manrope body type, and DM Mono metadata.
- The main navigation uses **Our Services** as the merged destination for services and who we help.
- The standalone preview is a single-page site with anchor navigation.

## Completed edits

### First build

- Converted the Template 2 concept into a standalone responsive site.
- Added About, Our Services, Results, Contact, and mobile navigation.
- Added `provisa-record.jpg` as the primary visual.
- Added restrained entrance motion and a tactile paper grain treatment.

### Client update

- Added a dedicated **Meet the Team** section with four placeholder portraits and team-desk descriptions.
- Added a touch-friendly, arrow-and-dot team carousel with mobile swipe support.
- Folded **Recognitions / proof of global relevance** and the visa visual into Results.
- Added the requested services:
  - Profile Assessment
  - Profile Building
  - Case preparation
    - EB1A
    - EB2-NIW
  - Strategy Development
- Added a clearly labelled stylised United States visa visual. It is a design placeholder, not a government document.
- Moved Blog and FAQ out of the primary homepage flow into a slide-out field-guide sidebar, with footer and mobile access.
- Added client contact information:
  - Email: `info@provisawriters.com`
  - Telephone: `+2348160550258`
  - Instagram: `https://www.instagram.com/provisa_writers?igsi=MXM4anpydzEzNXcxaw==`
  - LinkedIn: `https://www.linkedin.com/in/provisa-writers-ltd-086111367?trk=contact-info`
- Added a footer WhatsApp contact link using `https://wa.me/2348160550258`, alongside the Instagram, LinkedIn, and email links. Replace this number if the client supplies a different support number.
- Removed the Instagram, LinkedIn, and email icon row from the header, and removed the floating WhatsApp button so these links live in the footer only.
- Moved the team carousel navigation arrows onto the left and right sides of the active slide for easier browsing without scrolling.
- Changed the contact form to prepare a pre-filled email in the visitor's mail application. This is not a server-side mailing service.

## Temporary blog workflow

The prototype admin page is available at:

- URL: `/pwadmin`
- Username: `pwadmin`
- Password: `client123`

The page supports:

- Add/publish post
- Upload a feature image
- Edit post
- Delete post
- Publish-from time
- Remove-after time
- Public Blog section that only shows currently visible posts

The admin area also includes a **Staff directory** tab with:

- Add staff member
- Edit staff member
- Delete staff member
- Staff name, role, biography, and portrait upload

The exact temporary username is now `pwadmin` with no space. The page URL is `/pwadmin`.

## v4 homepage structure

The homepage now presents five primary content sections:

1. About Us
2. Meet the Team
3. Our Services
4. Results
5. Contact Us

The hero tagline is **Connecting Experts to Global Opportunities**. Blog and FAQ remain functional in the field-guide sidebar and are not rendered as primary homepage sections.

Posts currently live in the browser's local storage. They are not shared between browsers, not protected as production credentials, and not a substitute for a database.

## Production handoff still needed

1. Replace the temporary `/pwadmin` browser login with secure server-side authentication.
2. Add a database-backed posts table and an image/object-storage workflow.
3. Add a real email provider or server-side form endpoint for contact requests.
4. Confirm the final WhatsApp number and replace the current placeholder/current client number if needed.
5. Add approved team headshots, logo files, company details, legal links, privacy notice, and consent language.
6. Add the previous website's URL or screenshot and reconcile any missing tabs/content against it.
7. Add approved recognitions, testimonials, case studies, and visa/application imagery where legally appropriate.
8. Run a security and accessibility review before publishing.

## Future builder prompt

> Continue the Provisa Writers standalone Template 2 site from this file. Preserve the five-section homepage, the Our Services merge, team carousel, client contact links, Results proof content, sidebar Blog/FAQ, and admin tools. Treat the current admin credentials and local-storage blog/staff data as temporary prototype-only behavior. Before launch, move authentication, posts, staff records, image storage, and email delivery to secure server-backed services, and replace all placeholders with client-approved assets and copy. First compare the supplied previous-site link or screenshot with the current navigation and content, then make only the missing information architecture changes.