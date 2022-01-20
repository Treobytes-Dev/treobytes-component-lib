import React, { useRef, useState, useEffect } from "react";
import { node, bool } from "prop-types";
import { Logo } from "./Logo";
import { SideMenuX } from "./SideMenuX";
import { Close } from "../../icons/Close";
import { Menu } from "../../icons/Menu";
import { SocialIcons } from "./SocialIcons";
import "../../styles/header.scss";

/**
 * React Header component.
 * @function
 * Header - Renders a branded Treobytes header component.
 */

function AnimatedHeader({ children, sticky = false, className, ...rest }) {
  const [isSticky, setIsSticky] = useState(false);
  const ref = useRef();

  // mount
  useEffect(() => {
    const cachedRef = ref.current,
      observer = new IntersectionObserver(
        ([e]) => setIsSticky(e.intersectionRatio < 1),
        {
          threshold: [1],
          // rootMargin: '-1px 0px 0px 0px',  // alternativly, use this and set `top:0` in the CSS
        }
      );

    observer.observe(cachedRef);

    // unmount
    return function () {
      observer.unobserve(cachedRef);
    };
  }, []);

  return (
    <header
      className={className + (isSticky ? " isSticky" : "")}
      ref={ref}
      {...rest}
    >
      {children}
    </header>
  );
}

export const Header = ({ linksTo, isAnimated = false }) => {
  const navigation = linksTo.map((link) => (
    <a key={link.id} className="anchor" href={link.href}>
      <li className="list-item">{link.name.toUpperCase()}</li>
    </a>
  ));

  return (
    <>
      {isAnimated ? (
        <>
          <AnimatedHeader>Sticky Header</AnimatedHeader>
          <p>
            Professionally evolve team driven web services with timely testing
            procedures. Energistically maintain maintainable sources after
            intermandated users. Authoritatively initiate economically sound
            paradigms through maintainable networks. Phosfluorescently deliver
            cross-platform convergence rather than extensible networks.
            Collaboratively redefine empowered content via tactical systems.
            Energistically productivate ubiquitous portals and functionalized
            total linkage. Seamlessly revolutionize interdependent leadership
            and 24/365 e-tailers. Proactively coordinate extensible data whereas
            enterprise testing procedures. Interactively synthesize cross
            functional meta-services via turnkey internal or "organic" sources.
            Appropriately synthesize customer directed ideas before installed
            base data. Interactively benchmark intermandated best practices with
            highly efficient intellectual capital. Synergistically drive ethical
            bandwidth before leading-edge markets. Continually whiteboard
            cross-platform experiences vis-a-vis enabled e-services.
            Enthusiastically transition parallel architectures vis-a-vis
            emerging best practices. Holisticly negotiate quality potentialities
            before team building materials. Dramatically supply performance
            based models before error-free human capital. Compellingly scale
            progressive interfaces rather than professional partnerships.
            Completely reintermediate vertical networks vis-a-vis extensive
            markets. Seamlessly implement mission-critical opportunities without
            functional leadership. Interactively build diverse networks through
            mission-critical information. Efficiently matrix covalent action
            items after compelling process improvements. Appropriately incubate
            compelling human capital before proactive human capital.
            Energistically streamline interoperable data and low-risk high-yield
            leadership. Authoritatively develop frictionless benefits after
            maintainable testing procedures. Collaboratively target alternative
            communities without unique best practices. Assertively supply
            one-to-one functionalities rather than viral platforms.
            Enthusiastically engineer pandemic vortals for transparent
            scenarios. Dramatically exploit superior supply chains after
            corporate niches. Intrinsicly strategize functional total linkage
            rather than enabled communities. Globally provide access to
            standards compliant niches vis-a-vis ubiquitous channels.
            Authoritatively repurpose market-driven portals for premier
            e-tailers. Collaboratively empower competitive sources through
            turnkey e-markets. Phosfluorescently envisioneer optimal data and
            economically sound products. Interactively reinvent business
            networks whereas technically sound process improvements.
            Energistically aggregate 2.0 collaboration and idea-sharing via
            bleeding-edge testing procedures. Compellingly cultivate cost
            effective ideas and B2C opportunities. Compellingly cultivate
            resource-leveling opportunities with e-business quality vectors.
            Credibly build prospective leadership for intermandated products.
            Phosfluorescently supply reliable mindshare for customized
            e-services. Interactively customize competitive core competencies
            with just in time channels. Quickly create process-centric value and
            viral metrics. Dynamically synthesize bricks-and-clicks initiatives
            for next-generation platforms. Assertively incentivize leveraged
            action items whereas excellent products. Dramatically myocardinate
            end-to-end systems whereas viral information. Conveniently create
            client-centered internal or "organic" sources vis-a-vis quality
            scenarios. Energistically matrix viral niche markets and timely
            materials. Collaboratively synthesize backward-compatible materials
            via enterprise vortals. Quickly morph economically sound
            technologies via premium potentialities. Collaboratively develop
            leveraged potentialities before client-centered processes.
            Continually conceptualize user-centric catalysts for change whereas
            distributed information. Holisticly reinvent granular platforms
            vis-a-vis highly efficient ROI. Dynamically evisculate
            out-of-the-box collaboration and idea-sharing through worldwide
            intellectual capital. Collaboratively enable premium quality vectors
            and multimedia based niches. Professionally customize wireless
            initiatives for client-based web services. Dynamically empower
            adaptive infomediaries before error-free services. Professionally
            orchestrate frictionless applications after customized e-services.
            Competently parallel task virtual best practices before vertical
            content. Objectively network pandemic customer service without
            dynamic niche markets. Compellingly develop 24/7 functionalities
            after exceptional value. Collaboratively evisculate just in time
            action items rather than real-time paradigms. Progressively scale
            frictionless channels whereas one-to-one materials. Authoritatively
            transition customer directed.
          </p>
          <p>
            Professionally evolve team driven web services with timely testing
            procedures. Energistically maintain maintainable sources after
            intermandated users. Authoritatively initiate economically sound
            paradigms through maintainable networks. Phosfluorescently deliver
            cross-platform convergence rather than extensible networks.
            Collaboratively redefine empowered content via tactical systems.
            Energistically productivate ubiquitous portals and functionalized
            total linkage. Seamlessly revolutionize interdependent leadership
            and 24/365 e-tailers. Proactively coordinate extensible data whereas
            enterprise testing procedures. Interactively synthesize cross
            functional meta-services via turnkey internal or "organic" sources.
            Appropriately synthesize customer directed ideas before installed
            base data. Interactively benchmark intermandated best practices with
            highly efficient intellectual capital. Synergistically drive ethical
            bandwidth before leading-edge markets. Continually whiteboard
            cross-platform experiences vis-a-vis enabled e-services.
            Enthusiastically transition parallel architectures vis-a-vis
            emerging best practices. Holisticly negotiate quality potentialities
            before team building materials. Dramatically supply performance
            based models before error-free human capital. Compellingly scale
            progressive interfaces rather than professional partnerships.
            Completely reintermediate vertical networks vis-a-vis extensive
            markets. Seamlessly implement mission-critical opportunities without
            functional leadership. Interactively build diverse networks through
            mission-critical information. Efficiently matrix covalent action
            items after compelling process improvements. Appropriately incubate
            compelling human capital before proactive human capital.
            Energistically streamline interoperable data and low-risk high-yield
            leadership. Authoritatively develop frictionless benefits after
            maintainable testing procedures. Collaboratively target alternative
            communities without unique best practices. Assertively supply
            one-to-one functionalities rather than viral platforms.
            Enthusiastically engineer pandemic vortals for transparent
            scenarios. Dramatically exploit superior supply chains after
            corporate niches. Intrinsicly strategize functional total linkage
            rather than enabled communities. Globally provide access to
            standards compliant niches vis-a-vis ubiquitous channels.
            Authoritatively repurpose market-driven portals for premier
            e-tailers. Collaboratively empower competitive sources through
            turnkey e-markets. Phosfluorescently envisioneer optimal data and
            economically sound products. Interactively reinvent business
            networks whereas technically sound process improvements.
            Energistically aggregate 2.0 collaboration and idea-sharing via
            bleeding-edge testing procedures. Compellingly cultivate cost
            effective ideas and B2C opportunities. Compellingly cultivate
            resource-leveling opportunities with e-business quality vectors.
            Credibly build prospective leadership for intermandated products.
            Phosfluorescently supply reliable mindshare for customized
            e-services. Interactively customize competitive core competencies
            with just in time channels. Quickly create process-centric value and
            viral metrics. Dynamically synthesize bricks-and-clicks initiatives
            for next-generation platforms. Assertively incentivize leveraged
            action items whereas excellent products. Dramatically myocardinate
            end-to-end systems whereas viral information. Conveniently create
            client-centered internal or "organic" sources vis-a-vis quality
            scenarios. Energistically matrix viral niche markets and timely
            materials. Collaboratively synthesize backward-compatible materials
            via enterprise vortals. Quickly morph economically sound
            technologies via premium potentialities. Collaboratively develop
            leveraged potentialities before client-centered processes.
            Continually conceptualize user-centric catalysts for change whereas
            distributed information. Holisticly reinvent granular platforms
            vis-a-vis highly efficient ROI. Dynamically evisculate
            out-of-the-box collaboration and idea-sharing through worldwide
            intellectual capital. Collaboratively enable premium quality vectors
            and multimedia based niches. Professionally customize wireless
            initiatives for client-based web services. Dynamically empower
            adaptive infomediaries before error-free services. Professionally
            orchestrate frictionless applications after customized e-services.
            Competently parallel task virtual best practices before vertical
            content. Objectively network pandemic customer service without
            dynamic niche markets. Compellingly develop 24/7 functionalities
            after exceptional value. Collaboratively evisculate just in time
            action items rather than real-time paradigms. Progressively scale
            frictionless channels whereas one-to-one materials. Authoritatively
            transition customer directed.
          </p>
          <p>
            Professionally evolve team driven web services with timely testing
            procedures. Energistically maintain maintainable sources after
            intermandated users. Authoritatively initiate economically sound
            paradigms through maintainable networks. Phosfluorescently deliver
            cross-platform convergence rather than extensible networks.
            Collaboratively redefine empowered content via tactical systems.
            Energistically productivate ubiquitous portals and functionalized
            total linkage. Seamlessly revolutionize interdependent leadership
            and 24/365 e-tailers. Proactively coordinate extensible data whereas
            enterprise testing procedures. Interactively synthesize cross
            functional meta-services via turnkey internal or "organic" sources.
            Appropriately synthesize customer directed ideas before installed
            base data. Interactively benchmark intermandated best practices with
            highly efficient intellectual capital. Synergistically drive ethical
            bandwidth before leading-edge markets. Continually whiteboard
            cross-platform experiences vis-a-vis enabled e-services.
            Enthusiastically transition parallel architectures vis-a-vis
            emerging best practices. Holisticly negotiate quality potentialities
            before team building materials. Dramatically supply performance
            based models before error-free human capital. Compellingly scale
            progressive interfaces rather than professional partnerships.
            Completely reintermediate vertical networks vis-a-vis extensive
            markets. Seamlessly implement mission-critical opportunities without
            functional leadership. Interactively build diverse networks through
            mission-critical information. Efficiently matrix covalent action
            items after compelling process improvements. Appropriately incubate
            compelling human capital before proactive human capital.
            Energistically streamline interoperable data and low-risk high-yield
            leadership. Authoritatively develop frictionless benefits after
            maintainable testing procedures. Collaboratively target alternative
            communities without unique best practices. Assertively supply
            one-to-one functionalities rather than viral platforms.
            Enthusiastically engineer pandemic vortals for transparent
            scenarios. Dramatically exploit superior supply chains after
            corporate niches. Intrinsicly strategize functional total linkage
            rather than enabled communities. Globally provide access to
            standards compliant niches vis-a-vis ubiquitous channels.
            Authoritatively repurpose market-driven portals for premier
            e-tailers. Collaboratively empower competitive sources through
            turnkey e-markets. Phosfluorescently envisioneer optimal data and
            economically sound products. Interactively reinvent business
            networks whereas technically sound process improvements.
            Energistically aggregate 2.0 collaboration and idea-sharing via
            bleeding-edge testing procedures. Compellingly cultivate cost
            effective ideas and B2C opportunities. Compellingly cultivate
            resource-leveling opportunities with e-business quality vectors.
            Credibly build prospective leadership for intermandated products.
            Phosfluorescently supply reliable mindshare for customized
            e-services. Interactively customize competitive core competencies
            with just in time channels. Quickly create process-centric value and
            viral metrics. Dynamically synthesize bricks-and-clicks initiatives
            for next-generation platforms. Assertively incentivize leveraged
            action items whereas excellent products. Dramatically myocardinate
            end-to-end systems whereas viral information. Conveniently create
            client-centered internal or "organic" sources vis-a-vis quality
            scenarios. Energistically matrix viral niche markets and timely
            materials. Collaboratively synthesize backward-compatible materials
            via enterprise vortals. Quickly morph economically sound
            technologies via premium potentialities. Collaboratively develop
            leveraged potentialities before client-centered processes.
            Continually conceptualize user-centric catalysts for change whereas
            distributed information. Holisticly reinvent granular platforms
            vis-a-vis highly efficient ROI. Dynamically evisculate
            out-of-the-box collaboration and idea-sharing through worldwide
            intellectual capital. Collaboratively enable premium quality vectors
            and multimedia based niches. Professionally customize wireless
            initiatives for client-based web services. Dynamically empower
            adaptive infomediaries before error-free services. Professionally
            orchestrate frictionless applications after customized e-services.
            Competently parallel task virtual best practices before vertical
            content. Objectively network pandemic customer service without
            dynamic niche markets. Compellingly develop 24/7 functionalities
            after exceptional value. Collaboratively evisculate just in time
            action items rather than real-time paradigms. Progressively scale
            frictionless channels whereas one-to-one materials. Authoritatively
            transition customer directed.
          </p>
          <p>
            Professionally evolve team driven web services with timely testing
            procedures. Energistically maintain maintainable sources after
            intermandated users. Authoritatively initiate economically sound
            paradigms through maintainable networks. Phosfluorescently deliver
            cross-platform convergence rather than extensible networks.
            Collaboratively redefine empowered content via tactical systems.
            Energistically productivate ubiquitous portals and functionalized
            total linkage. Seamlessly revolutionize interdependent leadership
            and 24/365 e-tailers. Proactively coordinate extensible data whereas
            enterprise testing procedures. Interactively synthesize cross
            functional meta-services via turnkey internal or "organic" sources.
            Appropriately synthesize customer directed ideas before installed
            base data. Interactively benchmark intermandated best practices with
            highly efficient intellectual capital. Synergistically drive ethical
            bandwidth before leading-edge markets. Continually whiteboard
            cross-platform experiences vis-a-vis enabled e-services.
            Enthusiastically transition parallel architectures vis-a-vis
            emerging best practices. Holisticly negotiate quality potentialities
            before team building materials. Dramatically supply performance
            based models before error-free human capital. Compellingly scale
            progressive interfaces rather than professional partnerships.
            Completely reintermediate vertical networks vis-a-vis extensive
            markets. Seamlessly implement mission-critical opportunities without
            functional leadership. Interactively build diverse networks through
            mission-critical information. Efficiently matrix covalent action
            items after compelling process improvements. Appropriately incubate
            compelling human capital before proactive human capital.
            Energistically streamline interoperable data and low-risk high-yield
            leadership. Authoritatively develop frictionless benefits after
            maintainable testing procedures. Collaboratively target alternative
            communities without unique best practices. Assertively supply
            one-to-one functionalities rather than viral platforms.
            Enthusiastically engineer pandemic vortals for transparent
            scenarios. Dramatically exploit superior supply chains after
            corporate niches. Intrinsicly strategize functional total linkage
            rather than enabled communities. Globally provide access to
            standards compliant niches vis-a-vis ubiquitous channels.
            Authoritatively repurpose market-driven portals for premier
            e-tailers. Collaboratively empower competitive sources through
            turnkey e-markets. Phosfluorescently envisioneer optimal data and
            economically sound products. Interactively reinvent business
            networks whereas technically sound process improvements.
            Energistically aggregate 2.0 collaboration and idea-sharing via
            bleeding-edge testing procedures. Compellingly cultivate cost
            effective ideas and B2C opportunities. Compellingly cultivate
            resource-leveling opportunities with e-business quality vectors.
            Credibly build prospective leadership for intermandated products.
            Phosfluorescently supply reliable mindshare for customized
            e-services. Interactively customize competitive core competencies
            with just in time channels. Quickly create process-centric value and
            viral metrics. Dynamically synthesize bricks-and-clicks initiatives
            for next-generation platforms. Assertively incentivize leveraged
            action items whereas excellent products. Dramatically myocardinate
            end-to-end systems whereas viral information. Conveniently create
            client-centered internal or "organic" sources vis-a-vis quality
            scenarios. Energistically matrix viral niche markets and timely
            materials. Collaboratively synthesize backward-compatible materials
            via enterprise vortals. Quickly morph economically sound
            technologies via premium potentialities. Collaboratively develop
            leveraged potentialities before client-centered processes.
            Continually conceptualize user-centric catalysts for change whereas
            distributed information. Holisticly reinvent granular platforms
            vis-a-vis highly efficient ROI. Dynamically evisculate
            out-of-the-box collaboration and idea-sharing through worldwide
            intellectual capital. Collaboratively enable premium quality vectors
            and multimedia based niches. Professionally customize wireless
            initiatives for client-based web services. Dynamically empower
            adaptive infomediaries before error-free services. Professionally
            orchestrate frictionless applications after customized e-services.
            Competently parallel task virtual best practices before vertical
            content. Objectively network pandemic customer service without
            dynamic niche markets. Compellingly develop 24/7 functionalities
            after exceptional value. Collaboratively evisculate just in time
            action items rather than real-time paradigms. Progressively scale
            frictionless channels whereas one-to-one materials. Authoritatively
            transition customer directed.
          </p>
          <p>
            Professionally evolve team driven web services with timely testing
            procedures. Energistically maintain maintainable sources after
            intermandated users. Authoritatively initiate economically sound
            paradigms through maintainable networks. Phosfluorescently deliver
            cross-platform convergence rather than extensible networks.
            Collaboratively redefine empowered content via tactical systems.
            Energistically productivate ubiquitous portals and functionalized
            total linkage. Seamlessly revolutionize interdependent leadership
            and 24/365 e-tailers. Proactively coordinate extensible data whereas
            enterprise testing procedures. Interactively synthesize cross
            functional meta-services via turnkey internal or "organic" sources.
            Appropriately synthesize customer directed ideas before installed
            base data. Interactively benchmark intermandated best practices with
            highly efficient intellectual capital. Synergistically drive ethical
            bandwidth before leading-edge markets. Continually whiteboard
            cross-platform experiences vis-a-vis enabled e-services.
            Enthusiastically transition parallel architectures vis-a-vis
            emerging best practices. Holisticly negotiate quality potentialities
            before team building materials. Dramatically supply performance
            based models before error-free human capital. Compellingly scale
            progressive interfaces rather than professional partnerships.
            Completely reintermediate vertical networks vis-a-vis extensive
            markets. Seamlessly implement mission-critical opportunities without
            functional leadership. Interactively build diverse networks through
            mission-critical information. Efficiently matrix covalent action
            items after compelling process improvements. Appropriately incubate
            compelling human capital before proactive human capital.
            Energistically streamline interoperable data and low-risk high-yield
            leadership. Authoritatively develop frictionless benefits after
            maintainable testing procedures. Collaboratively target alternative
            communities without unique best practices. Assertively supply
            one-to-one functionalities rather than viral platforms.
            Enthusiastically engineer pandemic vortals for transparent
            scenarios. Dramatically exploit superior supply chains after
            corporate niches. Intrinsicly strategize functional total linkage
            rather than enabled communities. Globally provide access to
            standards compliant niches vis-a-vis ubiquitous channels.
            Authoritatively repurpose market-driven portals for premier
            e-tailers. Collaboratively empower competitive sources through
            turnkey e-markets. Phosfluorescently envisioneer optimal data and
            economically sound products. Interactively reinvent business
            networks whereas technically sound process improvements.
            Energistically aggregate 2.0 collaboration and idea-sharing via
            bleeding-edge testing procedures. Compellingly cultivate cost
            effective ideas and B2C opportunities. Compellingly cultivate
            resource-leveling opportunities with e-business quality vectors.
            Credibly build prospective leadership for intermandated products.
            Phosfluorescently supply reliable mindshare for customized
            e-services. Interactively customize competitive core competencies
            with just in time channels. Quickly create process-centric value and
            viral metrics. Dynamically synthesize bricks-and-clicks initiatives
            for next-generation platforms. Assertively incentivize leveraged
            action items whereas excellent products. Dramatically myocardinate
            end-to-end systems whereas viral information. Conveniently create
            client-centered internal or "organic" sources vis-a-vis quality
            scenarios. Energistically matrix viral niche markets and timely
            materials. Collaboratively synthesize backward-compatible materials
            via enterprise vortals. Quickly morph economically sound
            technologies via premium potentialities. Collaboratively develop
            leveraged potentialities before client-centered processes.
            Continually conceptualize user-centric catalysts for change whereas
            distributed information. Holisticly reinvent granular platforms
            vis-a-vis highly efficient ROI. Dynamically evisculate
            out-of-the-box collaboration and idea-sharing through worldwide
            intellectual capital. Collaboratively enable premium quality vectors
            and multimedia based niches. Professionally customize wireless
            initiatives for client-based web services. Dynamically empower
            adaptive infomediaries before error-free services. Professionally
            orchestrate frictionless applications after customized e-services.
            Competently parallel task virtual best practices before vertical
            content. Objectively network pandemic customer service without
            dynamic niche markets. Compellingly develop 24/7 functionalities
            after exceptional value. Collaboratively evisculate just in time
            action items rather than real-time paradigms. Progressively scale
            frictionless channels whereas one-to-one materials. Authoritatively
            transition customer directed.
          </p>
          <p>
            Professionally evolve team driven web services with timely testing
            procedures. Energistically maintain maintainable sources after
            intermandated users. Authoritatively initiate economically sound
            paradigms through maintainable networks. Phosfluorescently deliver
            cross-platform convergence rather than extensible networks.
            Collaboratively redefine empowered content via tactical systems.
            Energistically productivate ubiquitous portals and functionalized
            total linkage. Seamlessly revolutionize interdependent leadership
            and 24/365 e-tailers. Proactively coordinate extensible data whereas
            enterprise testing procedures. Interactively synthesize cross
            functional meta-services via turnkey internal or "organic" sources.
            Appropriately synthesize customer directed ideas before installed
            base data. Interactively benchmark intermandated best practices with
            highly efficient intellectual capital. Synergistically drive ethical
            bandwidth before leading-edge markets. Continually whiteboard
            cross-platform experiences vis-a-vis enabled e-services.
            Enthusiastically transition parallel architectures vis-a-vis
            emerging best practices. Holisticly negotiate quality potentialities
            before team building materials. Dramatically supply performance
            based models before error-free human capital. Compellingly scale
            progressive interfaces rather than professional partnerships.
            Completely reintermediate vertical networks vis-a-vis extensive
            markets. Seamlessly implement mission-critical opportunities without
            functional leadership. Interactively build diverse networks through
            mission-critical information. Efficiently matrix covalent action
            items after compelling process improvements. Appropriately incubate
            compelling human capital before proactive human capital.
            Energistically streamline interoperable data and low-risk high-yield
            leadership. Authoritatively develop frictionless benefits after
            maintainable testing procedures. Collaboratively target alternative
            communities without unique best practices. Assertively supply
            one-to-one functionalities rather than viral platforms.
            Enthusiastically engineer pandemic vortals for transparent
            scenarios. Dramatically exploit superior supply chains after
            corporate niches. Intrinsicly strategize functional total linkage
            rather than enabled communities. Globally provide access to
            standards compliant niches vis-a-vis ubiquitous channels.
            Authoritatively repurpose market-driven portals for premier
            e-tailers. Collaboratively empower competitive sources through
            turnkey e-markets. Phosfluorescently envisioneer optimal data and
            economically sound products. Interactively reinvent business
            networks whereas technically sound process improvements.
            Energistically aggregate 2.0 collaboration and idea-sharing via
            bleeding-edge testing procedures. Compellingly cultivate cost
            effective ideas and B2C opportunities. Compellingly cultivate
            resource-leveling opportunities with e-business quality vectors.
            Credibly build prospective leadership for intermandated products.
            Phosfluorescently supply reliable mindshare for customized
            e-services. Interactively customize competitive core competencies
            with just in time channels. Quickly create process-centric value and
            viral metrics. Dynamically synthesize bricks-and-clicks initiatives
            for next-generation platforms. Assertively incentivize leveraged
            action items whereas excellent products. Dramatically myocardinate
            end-to-end systems whereas viral information. Conveniently create
            client-centered internal or "organic" sources vis-a-vis quality
            scenarios. Energistically matrix viral niche markets and timely
            materials. Collaboratively synthesize backward-compatible materials
            via enterprise vortals. Quickly morph economically sound
            technologies via premium potentialities. Collaboratively develop
            leveraged potentialities before client-centered processes.
            Continually conceptualize user-centric catalysts for change whereas
            distributed information. Holisticly reinvent granular platforms
            vis-a-vis highly efficient ROI. Dynamically evisculate
            out-of-the-box collaboration and idea-sharing through worldwide
            intellectual capital. Collaboratively enable premium quality vectors
            and multimedia based niches. Professionally customize wireless
            initiatives for client-based web services. Dynamically empower
            adaptive infomediaries before error-free services. Professionally
            orchestrate frictionless applications after customized e-services.
            Competently parallel task virtual best practices before vertical
            content. Objectively network pandemic customer service without
            dynamic niche markets. Compellingly develop 24/7 functionalities
            after exceptional value. Collaboratively evisculate just in time
            action items rather than real-time paradigms. Progressively scale
            frictionless channels whereas one-to-one materials. Authoritatively
            transition customer directed.
          </p>
                    <p>
            Professionally evolve team driven web services with timely testing
            procedures. Energistically maintain maintainable sources after
            intermandated users. Authoritatively initiate economically sound
            paradigms through maintainable networks. Phosfluorescently deliver
            cross-platform convergence rather than extensible networks.
            Collaboratively redefine empowered content via tactical systems.
            Energistically productivate ubiquitous portals and functionalized
            total linkage. Seamlessly revolutionize interdependent leadership
            and 24/365 e-tailers. Proactively coordinate extensible data whereas
            enterprise testing procedures. Interactively synthesize cross
            functional meta-services via turnkey internal or "organic" sources.
            Appropriately synthesize customer directed ideas before installed
            base data. Interactively benchmark intermandated best practices with
            highly efficient intellectual capital. Synergistically drive ethical
            bandwidth before leading-edge markets. Continually whiteboard
            cross-platform experiences vis-a-vis enabled e-services.
            Enthusiastically transition parallel architectures vis-a-vis
            emerging best practices. Holisticly negotiate quality potentialities
            before team building materials. Dramatically supply performance
            based models before error-free human capital. Compellingly scale
            progressive interfaces rather than professional partnerships.
            Completely reintermediate vertical networks vis-a-vis extensive
            markets. Seamlessly implement mission-critical opportunities without
            functional leadership. Interactively build diverse networks through
            mission-critical information. Efficiently matrix covalent action
            items after compelling process improvements. Appropriately incubate
            compelling human capital before proactive human capital.
            Energistically streamline interoperable data and low-risk high-yield
            leadership. Authoritatively develop frictionless benefits after
            maintainable testing procedures. Collaboratively target alternative
            communities without unique best practices. Assertively supply
            one-to-one functionalities rather than viral platforms.
            Enthusiastically engineer pandemic vortals for transparent
            scenarios. Dramatically exploit superior supply chains after
            corporate niches. Intrinsicly strategize functional total linkage
            rather than enabled communities. Globally provide access to
            standards compliant niches vis-a-vis ubiquitous channels.
            Authoritatively repurpose market-driven portals for premier
            e-tailers. Collaboratively empower competitive sources through
            turnkey e-markets. Phosfluorescently envisioneer optimal data and
            economically sound products. Interactively reinvent business
            networks whereas technically sound process improvements.
            Energistically aggregate 2.0 collaboration and idea-sharing via
            bleeding-edge testing procedures. Compellingly cultivate cost
            effective ideas and B2C opportunities. Compellingly cultivate
            resource-leveling opportunities with e-business quality vectors.
            Credibly build prospective leadership for intermandated products.
            Phosfluorescently supply reliable mindshare for customized
            e-services. Interactively customize competitive core competencies
            with just in time channels. Quickly create process-centric value and
            viral metrics. Dynamically synthesize bricks-and-clicks initiatives
            for next-generation platforms. Assertively incentivize leveraged
            action items whereas excellent products. Dramatically myocardinate
            end-to-end systems whereas viral information. Conveniently create
            client-centered internal or "organic" sources vis-a-vis quality
            scenarios. Energistically matrix viral niche markets and timely
            materials. Collaboratively synthesize backward-compatible materials
            via enterprise vortals. Quickly morph economically sound
            technologies via premium potentialities. Collaboratively develop
            leveraged potentialities before client-centered processes.
            Continually conceptualize user-centric catalysts for change whereas
            distributed information. Holisticly reinvent granular platforms
            vis-a-vis highly efficient ROI. Dynamically evisculate
            out-of-the-box collaboration and idea-sharing through worldwide
            intellectual capital. Collaboratively enable premium quality vectors
            and multimedia based niches. Professionally customize wireless
            initiatives for client-based web services. Dynamically empower
            adaptive infomediaries before error-free services. Professionally
            orchestrate frictionless applications after customized e-services.
            Competently parallel task virtual best practices before vertical
            content. Objectively network pandemic customer service without
            dynamic niche markets. Compellingly develop 24/7 functionalities
            after exceptional value. Collaboratively evisculate just in time
            action items rather than real-time paradigms. Progressively scale
            frictionless channels whereas one-to-one materials. Authoritatively
            transition customer directed.
          </p>
        </>
      ) : (
        <header className="header" data-test-id="header">
          <div className="container">
            <Logo />
            <div className="main-nav">
              <ul className="unordered-list">
                <div className="is-large">{navigation}</div>

                <div className="is-small">
                  <SideMenuX
                    rightIconClose={
                      <Close
                        additionalClassName=""
                        fill="#000"
                        height={50}
                        viewBox="0 0 25 25"
                        width={50}
                      />
                    }
                    trigger={
                      <Menu
                        additionalClassName="action"
                        height={50}
                        viewBox="0 0 512 512"
                        width={50}
                      />
                    }
                  >
                    {navigation}
                    <SocialIcons />
                  </SideMenuX>
                </div>
              </ul>
            </div>
          </div>
        </header>
      )}
    </>
  );
};

Header.propTypes = {
  /**
   * Include specific navigation component
   */
  navigation: node,

  /**
   * Include specific navigation component
   */
  isAnimated: bool,
};
