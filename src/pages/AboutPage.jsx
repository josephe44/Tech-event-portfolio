function AboutPage() {
  return (
    <div className="grid grid-cols-1 place-items-center mt-4">
      <div className="w-24 h-24 mx-auto">
        <img
          className="w-full rounded-full"
          src="https://res.cloudinary.com/eworldtech/image/upload/c_scale,w_1024/v1653593839/oscafest%202022%20pictures/IMG_20220326_090350_2_uavsuf.jpg"
          alt="about-img"
        />
      </div>
      <div className="mt-6 md:text-center sm:text-left lg:w-3/5">
        <h1 className="text-2xl font-bold mb-2">
          <i class="fa-solid fa-circle-user"></i> About Me
        </h1>
        <p>
          Osuohia Emmanuel is a Software Engineering Student, a lover of
          JavaScript, who has invested hours in learning about it and how it
          works, and still learning JavaScript. He has extended his learning in
          different platforms: Udemy, Udacity, FrontendMasters and more. Aims to
          work for Google or Microsoft soon. Also he teaches upcoming newbies on
          frontend development. You can check his github for projects.
        </p>
        <p className="mt-1">
          Osuohia Emmanuel is a graduate of Electrical and Electronics
          engineering. Currently He is studying Software Engineering at
          Altschool Africa. You can find him on his social media accounts:
        </p>
      </div>
      <div className="mt-4">
        <a
          href="https://github.com/josephe44/"
          rel="noreferrer"
          target="_blank"
          className="mr-3 text-sm"
        >
          <i className="fa-brands fa-github mr-1 text-primary"></i>Github
        </a>
        <a
          href="https://twitter.com/Eworld_Tech/"
          rel="noreferrer"
          target="_blank"
          className="mr-3 text-sm"
        >
          <i className="fa-brands fa-twitter mr-1 text-primary"></i>Twitter
        </a>
        <a
          href="https://www.linkedin.com/in/osuohia-emmanuel/"
          rel="noreferrer"
          target="_blank"
          className="mr-3 text-sm"
        >
          <i className="fa-brands fa-linkedin mr-1 text-primary"></i> Linkedin
        </a>
      </div>
    </div>
  )
}

export default AboutPage
