import React from 'react'
import '../../assets/handLabels.css'

export default function PlayerHands({ results }) {
   return (
    <div className='playerCardLbls'>
      <svg viewBox="0 -1 348.8 60" className="lblBase lblSizeBig">
        <rect fill={results.l.fill} x="0.5" y="18.5" width="173.4" height="18.4" rx="8.37" ry="8.37" className="svgLblBase"></rect>
        <text textAnchor="middle" fontWeight="bold" fontSize="14" x="87.45" y="33" fill="#ffffff" opacity="0.8">
          {results.l.label}
        </text> 
        
        <rect fill={results.r.fill} x="173.9" y="18.5" width="173.9" height="18.4" rx="8.37" ry="8.37" className="svgLblBase"></rect>
        <text textAnchor="middle" fontWeight="bold" fontSize="14" x="261.35" y="33" fill="#ffffff" opacity="0.8">
        {results.r.label}
        </text> 
        
        <rect fill={results.m.fill} x="86.55" y="0" width="173.4" height="18.4" rx="8.37" ry="8.37" className="svgLblBase"></rect>
        <text textAnchor="middle" fontWeight="bold" fontSize="14" x="174" y="14" fill="#ffffff" opacity="0.8">
        {results.m.label}
        </text>
        
        <rect fill={results.main.fill} x="0.5" y="37.4" width="347.8" height="18.4" rx="8.37" ry="8.37" className="svgLblBase"></rect>
        <text textAnchor="middle" fontWeight="bold" fontSize="14" x="174" y="51.5" fill="#ffffff" opacity="0.8">
        {results.main.label}
        </text>
        
        </svg>


    </div>
  )
}
