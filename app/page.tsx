import Link from "next/link";

export default function Home() {
  const recipient = "emmanuelsuccess237@gmail.com";
  const subject = "Account Deletion Request";
  const body = `Hello,

I would like to request deletion of my account associated with the app.

Email Address: (your email address)
Username (if applicable): [your username]

Please confirm once the deletion process is complete.

Thank you.`;

  // Encode the URI components for the mailto link
  const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 flex flex-col items-center justify-center p-4 sm:p-8 font-sans text-gray-900 dark:text-gray-100">
      <main className="w-full max-w-2xl bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-gray-100 dark:border-zinc-800 overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-center text-white">
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            Delete Account Request
          </h1>
          <p className="text-blue-100 text-lg opacity-90">
            For StudentSpark App
          </p>
        </div>

        <div className="p-8 space-y-10">
          {/* Introduction */}
          <div className="text-center space-y-2">
            <h2 className="text-xl font-semibold">
              We value your privacy and control.
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto leading-relaxed">
              If you wish to remove your account and associated data from
              StudentSpark, you can choose one of the following methods below.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Option 1: In-App Deletion */}
            <div className="bg-gray-50 dark:bg-zinc-800/50 p-6 rounded-2xl border border-gray-100 dark:border-zinc-800 flex flex-col items-center text-center transition-all hover:shadow-md">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Via Application</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Instant deletion is available directly within the app settings.
              </p>
              <div className="mt-auto prose prose-sm text-gray-500 dark:text-gray-400">
                <ol className="text-left space-y-1 list-none p-0 m-0">
                  <li className="flex items-center">
                    <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs flex items-center justify-center mr-2">
                      1
                    </span>
                    Open the StudentSpark App
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs flex items-center justify-center mr-2">
                      2
                    </span>
                    Navigate to <strong>Profile</strong>
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs flex items-center justify-center mr-2">
                      3
                    </span>
                    Tap <strong>Delete Account</strong>
                  </li>
                </ol>
              </div>
            </div>

            {/* Option 2: Email Request */}
            <div className="bg-gray-50 dark:bg-zinc-800/50 p-6 rounded-2xl border border-gray-100 dark:border-zinc-800 flex flex-col items-center text-center transition-all hover:shadow-md">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Via Email Request</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                Manual processing by our support team. We'll verify your request
                first.
              </p>
              <div className="mt-auto w-full">
                <a
                  href={mailtoLink}
                  className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold text-white transition-all bg-zinc-900 rounded-lg shadow-sm hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-900 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
                >
                  Request Account Deletion
                </a>
                <p className="text-xs text-gray-500 mt-3">
                  Opens your default email client
                </p>
              </div>
            </div>
          </div>

          {/* Policy / Footer */}
          <div className="border-t border-gray-100 dark:border-zinc-800 pt-8 mt-8 text-left">
            <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">
              Data Deletion & Retention Policy
            </h4>
            <div className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
              <p>
                <strong>StudentSpark</strong> is committed to your privacy and
                data security. This policy explains how we handle your data when
                you request an account deletion.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="bg-gray-50 dark:bg-zinc-800/30 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 dark:text-gray-200 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                    Data We Delete
                  </h5>
                  <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                    <li>
                      <strong>Personal Information:</strong> Name, email, phone
                      number, and profile photos.
                    </li>
                    <li>
                      <strong>User Content:</strong> All posts, messages, study
                      plans, and notes you created.
                    </li>
                    <li>
                      <strong>App Data:</strong> Usage history, preferences, and
                      settings.
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 dark:bg-zinc-800/30 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 dark:text-gray-200 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                    Data We Retain
                  </h5>
                  <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                    <li>
                      <strong>Transaction Records:</strong> Kept for{" "}
                      <strong>7 years</strong> for tax/legal auditing.
                    </li>
                    <li>
                      <strong>Security Logs:</strong> IP & access logs retained
                      for <strong>90 days</strong> to prevent fraud.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 text-xs text-blue-800 dark:text-blue-200">
                <p>
                  <strong>Note:</strong> Data deletion is permanent. Once
                  completed, your account cannot be recovered. Retained data is
                  anonymized where possible and stored securely.
                </p>
              </div>

              <p className="pt-2">
                For any privacy concerns, contact us at{" "}
                <a
                  href={`mailto:${recipient}`}
                  className="text-blue-600 hover:underline font-medium"
                >
                  {recipient}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
