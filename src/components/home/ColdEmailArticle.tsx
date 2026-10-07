export const ColdEmailArticle = () => (
  <div className="space-y-6 text-foreground/80 leading-relaxed text-sm md:text-base pb-8">
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-foreground">The Challenge</h3>
      <p>
        You're sending cold emails, but your reply rates are terrible (under 1%). Your emails are either landing in spam, getting ignored, or worse — getting your domain blacklisted. You've tried "best practices" from YouTube gurus, bought lead lists, and copied templates from Reddit threads... but nothing's working.
      </p>
      <p>
        <strong className="text-foreground">The brutal truth:</strong> Most cold emails in 2026 never even reach the inbox. Gmail and Outlook's spam filters have gotten smarter. They detect mass emails instantly. Generic templates get flagged. Bought lead lists get you blacklisted. And even if your email lands in the primary inbox, it's competing with 100+ other emails that day.
      </p>
      <p className="font-semibold text-foreground mt-4">Why is cold email so hard now?</p>
      <p>Because inbox providers (Gmail, Outlook, Yahoo) have spent billions building AI-powered spam filters. They're not just looking at your subject line anymore. They're analyzing:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Sender reputation (domain age, warmup history, previous spam complaints)</li>
        <li>Email authentication (SPF, DKIM, DMARC configuration)</li>
        <li>Engagement patterns (are recipients opening, replying, or deleting immediately?)</li>
        <li>Content analysis (does this look like a mass email or a personal message?)</li>
        <li>Sending behavior (volume spikes, blast patterns, suspicious timing)</li>
      </ul>
      <p className="mt-2">
        <strong className="text-foreground">Result:</strong> If you're sending cold emails in 2026 like it's 2019, you're getting 0.3% reply rates (if your emails even land). Your domain gets flagged. Your deliverability tanks. Your calendar stays empty.
      </p>
    </div>

    <hr className="border-border/50" />

    <div className="space-y-4">
      <h3 className="text-xl font-bold text-foreground">Why Most Cold Email Campaigns Fail</h3>
      
      <div>
        <h4 className="font-bold text-foreground">1. No Deliverability Infrastructure</h4>
        <p><strong className="text-foreground">The mistake:</strong> You're sending from your main business domain (@yourcompany.com). You blast 500 emails on day one. You didn't configure SPF/DKIM/DMARC properly. You didn't warm up the domain.</p>
        <p><strong className="text-foreground">What happens:</strong></p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Gmail sees a new domain suddenly sending hundreds of emails → instant spam folder</li>
          <li>Your domain reputation crashes within days</li>
          <li>Spam complaints start piling up</li>
          <li>Your main business email (@yourcompany.com) starts landing in spam too</li>
          <li>You've now poisoned your domain for ALL email</li>
        </ul>
        <p className="mt-2"><strong className="text-foreground">Why this kills campaigns:</strong> You can have the best copy in the world. If it lands in spam, no one sees it. Reply rate: 0%.</p>
      </div>

      <div>
        <h4 className="font-bold text-foreground">2. Terrible Targeting</h4>
        <p><strong className="text-foreground">The mistake:</strong> You bought a lead list from some sketchy data provider. Or you scraped LinkedIn with a Chrome extension. Now you're emailing 10,000 people who have nothing in common except they have "CEO" in their LinkedIn title.</p>
        <p><strong className="text-foreground">What happens:</strong></p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Half the emails are outdated (bounce rate 20%+)</li>
          <li>The other half are completely irrelevant </li>
          <li>People mark you as spam because your message is irrelevant</li>
          <li>Your sender reputation tanks</li>
        </ul>
        <p className="mt-2"><strong className="text-foreground">Why this kills campaigns:</strong> Even if your emails land in the inbox, they're going to the wrong people. No reply. No meetings. Just spam complaints.</p>
      </div>

      <div>
        <h4 className="font-bold text-foreground">3. Copy That Screams "Mass Email"</h4>
        <p><strong className="text-foreground">The mistake:</strong> You're using templates that start with "Hi {'{{FirstName}}'}, I noticed you work at {'{{Company}}'}..." — the same opening that 500 other salespeople used this month.</p>
        <p><strong className="text-foreground">What happens:</strong></p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Recipients instantly recognize it as a mass email</li>
          <li>They delete it in 2 seconds (or mark as spam)</li>
          <li>Gmail's AI sees low engagement</li>
          <li>Your future emails automatically go to spam</li>
        </ul>
        <p className="mt-2"><strong className="text-foreground">Why this kills campaigns:</strong> Generic templates don't get replies. People can smell automation from a mile away.</p>
      </div>

      <div>
        <h4 className="font-bold text-foreground">4. No Reply Handling System</h4>
        <p><strong className="text-foreground">The mistake:</strong> You send 1,000 cold emails. You get 10 replies. They sit in your inbox for 3 days because you're busy. By the time you respond, they've already talked to your competitor or lost interest.</p>
        <p><strong className="text-foreground">What happens:</strong></p>
        <ul className="list-disc pl-5 space-y-1">
          <li>You're generating interested leads, but not converting them</li>
          <li>Prospects think you're slow or unprofessional</li>
          <li>Your reply-to-meeting conversion rate is 10% (should be 50%+)</li>
        </ul>
        <p className="mt-2"><strong className="text-foreground">Why this kills campaigns:</strong> Cold email success isn't just about getting replies. It's about converting replies into booked meetings FAST.</p>
      </div>

      <div>
        <h4 className="font-bold text-foreground">5. No Optimization or Iteration</h4>
        <p><strong className="text-foreground">The mistake:</strong> You send 5,000 emails with one subject line, one message, one call-to-action. You get 15 replies (0.3%). You shrug and say "cold email doesn't work for us."</p>
        <p><strong className="text-foreground">What happens:</strong></p>
        <ul className="list-disc pl-5 space-y-1">
          <li>You never tested different subject lines</li>
          <li>You never tested different opening hooks</li>
          <li>You never tested different CTAs</li>
          <li>You never refined your ICP based on who actually replied</li>
        </ul>
        <p className="mt-2"><strong className="text-foreground">Why this kills campaigns:</strong> Cold email is a numbers game, but it's also a TESTING game. 0.3% reply rate means your message is broken. But you'll never know what to fix if you don't test.</p>
      </div>
    </div>

    <hr className="border-border/50" />

    <div className="space-y-4">
      <h3 className="text-xl font-bold text-foreground">The Websphrex Media Cold Email Framework</h3>
      <p><strong className="text-foreground">We've sent millions of cold emails. We know what works in 2026.</strong></p>
      <p>Our framework gets <strong className="text-foreground">6.89% reply rates</strong> (17x industry average) and <strong className="text-foreground">25+ qualified meetings booked in 30 days</strong>. Here's exactly how we do it.</p>

      <div>
        <h4 className="font-bold text-foreground">Phase 1: Infrastructure Setup (Week 1)</h4>
        <p><strong className="text-foreground">Goal:</strong> Build a bulletproof email infrastructure that NEVER lands in spam.</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li><strong className="text-foreground">Step 1: Domain Setup</strong> - We never send from your main domain. We set up 3-5 dedicated sending domains and configure SPF, DKIM, and DMARC.</li>
          <li><strong className="text-foreground">Step 2: Email Infrastructure</strong> - We create 3-5 email addresses per domain connected to Google Workspace, setting up forwarding.</li>
          <li><strong className="text-foreground">Step 3: Domain Warmup</strong> - We send low-volume, high-engagement emails for 2-3 weeks using simulation tools.</li>
          <li><strong className="text-foreground">Step 4: Email Rotation</strong> - We rotate sending, max 50-80 emails/day per inbox.</li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold text-foreground">Phase 2: ICP & List Building (Week 1-2)</h4>
        <p><strong className="text-foreground">Goal:</strong> Build a laser-targeted list of people who ACTUALLY match your Ideal Customer Profile.</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li><strong className="text-foreground">Step 1: Define Your ICP</strong> - Beyond demographics: company stage, revenue, tech stack, funding.</li>
          <li><strong className="text-foreground">Step 2: Build the List</strong> - Use Apollo, Sales Nav, and ZoomInfo (we build them, we never buy them).</li>
          <li><strong className="text-foreground">Step 3: Verify Everything</strong> - Scrub with NeverBounce/ZeroBounce to prevent bounces.</li>
          <li><strong className="text-foreground">Step 4: Segment by Persona</strong> - Split by job title, industry, and exact stage for targeted messaging.</li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold text-foreground">Phase 3: Messaging & Copy (Week 2)</h4>
        <p><strong className="text-foreground">Goal:</strong> Write emails that get replies, not deletes.</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li><strong className="text-foreground">Step 1: Research-Driven Personalization</strong> - Finding recent company news, hiring info, tech stack.</li>
          <li><strong className="text-foreground">Step 2: Value-First, Not Pitch-First</strong> - Share an insight, map a pain point, and offer a quick win.</li>
          <li><strong className="text-foreground">Step 3: A/B Test Everything</strong> - Subject lines, hooks, length, CTAs.</li>
          <li><strong className="text-foreground">Step 4: 4-Touch Follow-Up Sequence</strong> - Day 0 Value; Day 3 Bump; Day 7 Social Proof; Day 14 Breakup.</li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold text-foreground">Phase 4: Launch & Monitor (Week 3-4)</h4>
        <p><strong className="text-foreground">Goal:</strong> Start generating replies and booked meetings within 30 days.</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li><strong className="text-foreground">Step 1: Controlled Launch</strong> - Start with 50-100 emails/day total.</li>
          <li><strong className="text-foreground">Step 2: Real-Time Monitoring</strong> - Tracking delivery, open, reply, and complaint rates.</li>
          <li><strong className="text-foreground">Step 3: Reply Handling</strong> - Positive replies qualified immediately, objections addressed.</li>
          <li><strong className="text-foreground">Step 4: CRM Integration</strong> - Pushing leads straight to pipelines in GoHighLevel or HubSpot.</li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold text-foreground">Phase 5: Scale & Optimize (Month 2+)</h4>
        <p><strong className="text-foreground">Goal:</strong> Improve reply rates, increase volume, and scale what's working.</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li><strong className="text-foreground">Analyze</strong> which subject lines and ICPs drive the most engagement.</li>
          <li><strong className="text-foreground">Kill</strong> low-performing hooks and sequences.</li>
          <li><strong className="text-foreground">Scale</strong> the winners and increase domain capacity.</li>
          <li><strong className="text-foreground">Continuous Testing</strong> to stay ahead of spam filters.</li>
        </ul>
      </div>
    </div>

    <hr className="border-border/50" />

    <div className="space-y-4">
      <h3 className="text-xl font-bold text-foreground">Real Results: Go Floaters</h3>
      <p><strong className="text-foreground">Challenge:</strong> Go Floaters had no B2B acquisition funnel. They were a B2C coworking brand trying to break into B2B. They had no email infrastructure, no lead lists, no messaging strategy. They needed sales meetings FAST.</p>
      <p><strong className="text-foreground">Results:</strong></p>
      <ul className="list-disc pl-5 space-y-1">
        <li><strong className="text-foreground">6.89% reply rate</strong> (17x higher than industry average of 0.4%)</li>
        <li><strong className="text-foreground">25+ qualified sales meetings booked in 30 days</strong></li>
        <li><strong className="text-foreground">Zero spam complaints or blacklisting</strong></li>
        <li><strong className="text-foreground">Partnership continues</strong> — now generating consistent pipeline month over month</li>
      </ul>
      <p><strong className="text-foreground">Why it worked:</strong> We built infrastructure FIRST. We targeted exactly the right people (HR directors) and personalized the first touch. We handled replies within 2 hours, monitoring deliverability daily.</p>
    </div>

    <hr className="border-border/50" />

    <div className="space-y-4">
      <h3 className="text-xl font-bold text-foreground">Can You Do This Yourself?</h3>
      <p><strong className="text-foreground">Yes, but here's what you'll need:</strong></p>
      <ul className="list-disc pl-5 space-y-1">
        <li><strong className="text-foreground">Tools:</strong> Instantly/Smartlead, multiple domains, NeverBounce, Apollo, GoHighLevel, Mailreach (~$500-1,500/mo).</li>
        <li><strong className="text-foreground">Time:</strong> 60-80 hours in Month 1 for setup, list building, and copy. 20-30 hours/week ongoing.</li>
        <li><strong className="text-foreground">Skills:</strong> Deliverability configuration, value-driven copywriting, intensive data hygiene, A/B testing logic.</li>
      </ul>
      <p className="mt-2"><strong className="text-foreground">The Reality:</strong> Most business owners skip warmup, buy cheap lists, fire generic templates, ignore deliverability, and respond late to interested leads. Result: 0 meetings and burned domains.</p>
    </div>

    <hr className="border-border/50" />

    <div className="space-y-4 bg-accent/5 p-6 rounded-xl border border-accent/10">
      <h3 className="text-xl font-bold text-foreground">Or Let Us Build It For You</h3>
      <p><strong className="text-foreground">We've sent millions of cold emails. We know what works in 2026.</strong></p>
      <p><strong className="text-foreground">What you get:</strong></p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Full infrastructure setup (domains, warmup, deliverability monitoring)</li>
        <li>Targeted lead lists built for your ICP (verified, segmented, researched)</li>
        <li>Personalized copy that gets replies (6.89% average reply rate)</li>
        <li>Reply handling & meeting booking system (convert replies to meetings fast)</li>
        <li>Ongoing optimization & scaling (we improve every month)</li>
      </ul>

      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <a 
          href="https://api.leadconnectorhq.com/widget/bookings/growthifyu-discovery" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary-foreground shadow flex-1 sm:flex-none uppercase tracking-wide bg-accent hover:bg-accent/90 h-14 px-8"
        >
          → Start Getting Clients in 30 Days
        </a>
        <a 
          href="https://api.leadconnectorhq.com/widget/bookings/growthifyu-discovery" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm flex-1 sm:flex-none text-foreground hover:bg-accent/10 border-accent/20 hover:text-accent h-14 px-8"
        >
          Book Your Discovery Call Now
        </a>
      </div>
    </div>
  </div>
);
