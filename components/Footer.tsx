export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container-max section-padding">
        <div className="text-center">
          <div className="mb-12">
            <h3 className="gradient-text text-3xl font-bold mb-6">focusflow</h3>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Master your focus, amplify your productivity. Join thousands of users who have transformed their work habits with FocusFlow.
            </p>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400">
              © {currentYear} FocusFlow. All rights reserved. Built with Cosmic.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}