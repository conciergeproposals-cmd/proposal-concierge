'use client'

import { useEffect, useRef } from 'react'

export function CustomCursor() {
  const outerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!canHover || prefersReduced) return

    const outer = outerRef.current
    const inner = innerRef.current
    if (!outer || !inner) return

    outer.style.display = 'block'

    let mouseX = -100
    let mouseY = -100
    let rafId = 0

    function onMove(e: MouseEvent) {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    function tick() {
      outer!.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
      rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)
    window.addEventListener('mousemove', onMove, { passive: true })

    function onEnter() {
      inner!.style.width = '24px'
      inner!.style.height = '24px'
      inner!.style.marginLeft = '-12px'
      inner!.style.marginTop = '-12px'
      inner!.style.opacity = '0.65'
    }

    function onLeave() {
      inner!.style.width = '6px'
      inner!.style.height = '6px'
      inner!.style.marginLeft = '-3px'
      inner!.style.marginTop = '-3px'
      inner!.style.opacity = '1'
    }

    function onWindowLeave() {
      outer!.style.opacity = '0'
    }

    function onWindowEnter() {
      outer!.style.opacity = '1'
    }

    const interactives = document.querySelectorAll<HTMLElement>(
      'a, button, [role="button"], input, textarea, select, label'
    )

    interactives.forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    document.addEventListener('mouseleave', onWindowLeave)
    document.addEventListener('mouseenter', onWindowEnter)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onWindowLeave)
      document.removeEventListener('mouseenter', onWindowEnter)
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  return (
    <>
      {/* Outer: position-only, no transition so RAF updates land every frame */}
      <div
        ref={outerRef}
        aria-hidden="true"
        style={{
          display: 'none',
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 9999,
          willChange: 'transform',
          transition: 'opacity 200ms ease-out',
        }}
      >
        {/* Inner: handles size/opacity transition only */}
        <div
          ref={innerRef}
          style={{
            width: '6px',
            height: '6px',
            marginLeft: '-3px',
            marginTop: '-3px',
            borderRadius: '50%',
            backgroundColor: '#C9A961',
            mixBlendMode: 'multiply',
            transition:
              'width 120ms ease-out, height 120ms ease-out, margin 120ms ease-out, opacity 200ms ease-out',
          }}
        />
      </div>
    </>
  )
}
