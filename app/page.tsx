import Headline from "@/components/headline"
import BenefitsSection from "@/components/benefits-section"
import Footer from "@/components/footer"
import FormSection from "@/components/forms"
import WhatsappIcon from "@/components/whatsapp"
import ProblemAndSolution from "@/components/problem-solution"
import CTA from "@/components/cta"
import Testimonials from "@/components/testimonal"
import FAQSection from "@/components/accordion-faq"

function IndexPage() {
 
  return (
    <>
      <Headline></Headline>
      <ProblemAndSolution></ProblemAndSolution>
      <BenefitsSection></BenefitsSection>
      <CTA></CTA>
      <Testimonials></Testimonials>
      <FAQSection></FAQSection>
      <Footer></Footer>
      <WhatsappIcon></WhatsappIcon>
    </>
  )
}


export default IndexPage;
