import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact – Goud&Good",
  description: "Contactez l'équipe Goud&Good pour toute question, suggestion ou partenariat.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-slate-400 mb-6">
            <Link href="/" className="hover:text-emerald-400">Accueil</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Contact</span>
          </nav>
          
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Contactez-nous
          </h1>
          
          <p className="text-lg text-slate-300">
            Une question ? Une suggestion ? On vous répond rapidement !
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Nos coordonnées</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Email</h3>
                  <a href="mailto:contact@goudandgood.ma" className="text-emerald-600 hover:underline">
                    contact@goudandgood.ma
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Facebook</h3>
                  <a href="https://facebook.com/goudandgood" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    @goudandgood
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Instagram</h3>
                  <a href="https://www.instagram.com/goudandgood/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline">
                    @goudandgood
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-4">Pour les marques et partenaires</h3>
              <p className="text-slate-600 text-sm">
                Vous souhaitez nous envoyer un produit à tester ou proposer un partenariat ? 
                Contactez-nous par email avec l'objet "Partenariat".
              </p>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Questions fréquentes</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Comment sont réalisés vos tests ?</h3>
                <p className="text-slate-600 text-sm">
                  Nous analysons les caractéristiques techniques, les retours utilisateurs et comparons 
                  les prix au Maroc pour vous donner des recommandations objectives.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Les prix sont-ils à jour ?</h3>
                <p className="text-slate-600 text-sm">
                  Nous mettons à jour les prix régulièrement. Cependant, nous vous recommandons de 
                  toujours vérifier le prix actuel sur le site du vendeur avant d'acheter.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Comment gagnez-vous de l'argent ?</h3>
                <p className="text-slate-600 text-sm">
                  Nous utilisons des liens d'affiliation. Si vous achetez via nos liens, nous recevons 
                  une petite commission sans coût supplémentaire pour vous. Cela nous permet de continuer 
                  à créer du contenu gratuit et de qualité.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Puis-je suggérer un comparatif ?</h3>
                <p className="text-slate-600 text-sm">
                  Absolument ! Envoyez-nous votre idée par email et nous verrons si nous pouvons 
                  créer un comparatif sur ce sujet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
