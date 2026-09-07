import { useRef, useState, type FormEvent } from 'react'

export type InputMode = 'birthdays' | 'invite'

export default function CompatibilitySection({ mode, onModeChange }: { mode: InputMode; onModeChange: (mode: InputMode) => void }) {
  const [yourBirthday, setYourBirthday] = useState('')
  const [theirBirthday, setTheirBirthday] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [copyStatus, setCopyStatus] = useState('')
  const linkRef = useRef<HTMLInputElement>(null)
  const today = new Date()
  const maxBirthday = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`
  const inviteLink = `${window.location.origin}${window.location.pathname}#compatibility`

  function reveal(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  async function copyInvite() {
    try {
      await navigator.clipboard.writeText(inviteLink)
      setCopyStatus('Invite link copied. Share it with someone you want to connect with.')
    } catch {
      linkRef.current?.focus()
      linkRef.current?.select()
      setCopyStatus('Select and copy the link above to share your invitation.')
    }
  }

  return (
    <section className="compatibility" id="compatibility" aria-labelledby="compatibility-heading">
      <div className="compatibility-intro">
        <div className="connection-orbits" aria-hidden="true"><span /><span /></div>
        <h2 id="compatibility-heading" tabIndex={-1}>Two birthdays. One daily read.</h2>
        <p>See what feels effortless today—and what might need a little more care.</p>
      </div>
      <div className="match-panel">
        <fieldset className="input-options">
          <legend className="sr-only">How would you like to start?</legend>
          <label><input type="radio" name="input-mode" value="birthdays" checked={mode === 'birthdays'} onChange={() => onModeChange('birthdays')} /><span><span className="option-number" aria-hidden="true">01</span>Enter both birthdays</span></label>
          <label><input type="radio" name="input-mode" value="invite" checked={mode === 'invite'} onChange={() => onModeChange('invite')} /><span><span className="option-number" aria-hidden="true">02</span>Send an invite link</span></label>
        </fieldset>
        {mode === 'birthdays' ? (
          <form className="birthday-form" onSubmit={reveal}>
            <div className="birthday-fields">
              <div className="birthday-field"><label htmlFor="your-birthday">Your birthday</label><input id="your-birthday" name="your-birthday" type="date" required min="0001-01-01" max={maxBirthday} value={yourBirthday} onChange={(event) => { setYourBirthday(event.target.value); setSubmitted(false) }} aria-describedby="birthday-note" /></div>
              <span className="birthday-join" aria-hidden="true">&</span>
              <div className="birthday-field"><label htmlFor="their-birthday">Their birthday</label><input id="their-birthday" name="their-birthday" type="date" required min="0001-01-01" max={maxBirthday} value={theirBirthday} onChange={(event) => { setTheirBirthday(event.target.value); setSubmitted(false) }} aria-describedby="birthday-note" /></div>
            </div>
            <p className="input-note" id="birthday-note">Just your dates of birth. No names needed.</p>
            <button className="match-button reveal-button" type="submit">Reveal Today’s Match <span aria-hidden="true">↗</span></button>
            <div className="form-feedback" role="status">{submitted && <p>Your birthdays are ready. Daily reads are coming soon—this preview does not calculate a match yet.</p>}</div>
          </form>
        ) : (
          <div className="invite-form">
            <h3>A little curiosity goes both ways.</h3>
            <p>Invite someone to try DoWeClick with you.</p>
            <label htmlFor="invite-link">Your invite link</label>
            <div className="invite-link-row"><input ref={linkRef} id="invite-link" type="url" value={inviteLink} readOnly onFocus={(event) => event.currentTarget.select()} /><button type="button" className="match-button" onClick={copyInvite}>Copy link <span aria-hidden="true">↗</span></button></div>
            <p className="input-note">This preview link opens the birthday form. Shared daily reads are coming soon.</p>
            <div className="form-feedback" role="status"><p>{copyStatus}</p></div>
          </div>
        )}
        <p className="match-trust"><span aria-hidden="true">✓</span> Completely free. No signup. No app download.</p>
      </div>
      <p className="match-footnote">A fresh perspective on the two of you. Every day.</p>
    </section>
  )
}
